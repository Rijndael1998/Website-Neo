import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import BookIcon from '@mui/icons-material/Book';
import TimelineIcon from '@mui/icons-material/Timeline';

export const Links: Array<[title: string, url: string, icon: React.ReactNode]> = [
    ["Home", "/", <HomeIcon />,],
    ["Portfolio", "/portfolio", <WorkIcon />,],
    ["Blog", "/blog", <BookIcon />,],
    ["Timeline", "/timeline", <TimelineIcon />,],
];