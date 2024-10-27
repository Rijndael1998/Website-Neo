"use client";

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import MenuIcon from '@mui/icons-material/Menu';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DarkModeFix from '@/components/muiWrappers/darkModeFix/_darkModeFix';
import { Links } from '../navLinkCollection/navLink/links';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const brightness = 220;
const col = `rgba(${brightness}, ${brightness}, ${brightness}, 0.2)`;

const brightnessHover = brightness;
const colHover = `rgba(${brightnessHover}, ${brightnessHover}, ${brightnessHover}, 0.4)`;

const brightnessInner = 255;
const colInner = `rgba(${brightnessInner}, ${brightnessInner}, ${brightnessInner}, 0.6)`;

export default function FabNav() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const router = useRouter();

    useEffect(() => {
        const resize = () => setOpen(false);
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    return <DarkModeFix>
        <Backdrop open={open} sx={{
            backdropFilter: "blur(1em)",
        }} />
        <SpeedDial
            hidden={useMediaQuery("@media (min-width:90ch)")}
            ariaLabel="Mobile Menu FAB"
            sx={{
                position: 'fixed',
                top: "0.6em",
                right: "1em",

                color: "white",
            }}

            FabProps={{
                sx: {
                    backgroundColor: col,
                    backdropFilter: "blur(1em)",
                    [`&:hover`]: {
                        backgroundColor: colHover,
                    },

                    transition: "all 0.25s ease !important",
                }
            }}

            icon={<>
                <MenuIcon sx={{
                    color: colInner,
                    transform: `rotate(${open ? 180 : 0}deg)`,
                    transition: "0.25s ease all",
                }} />
            </>}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            direction='down'
        >
            {
                Links.map(link =>
                    <SpeedDialAction
                        key={link[1]}
                        icon={link[2]}
                        tooltipTitle={link[0]}
                        tooltipOpen
                        onClick={() => { handleClose(); router.push(link[1]); }}
                        sx={{ [`&, & button`]: { transition: "all 0.25s ease !important" } }}
                    />
                )
            }


        </SpeedDial>
    </DarkModeFix>
}