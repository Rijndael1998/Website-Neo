import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

export const Links: Array<[title: string, url: string, icon: React.ReactNode]> = [
    ["Home", "/", <FileCopyIcon />,],
    ["Portfolio", "/portfolio", <SaveIcon />,],
    ["Blog", "/blog", <PrintIcon />,],
    ["Timeline", "/timeline", <ShareIcon />,],
];