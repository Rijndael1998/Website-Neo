import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import BookIcon from '@mui/icons-material/Book';
import TimelineIcon from '@mui/icons-material/Timeline';

let key = 0;

export const Links: Array<[title: string, url: string, icon: React.ReactNode]> = [
    ["Home", "/", <HomeIcon key={++key} />,],
    ["Portfolio", "/portfolio", <WorkIcon key={++key} />,],
    ["Blog", "/blog", <BookIcon key={++key} />,],
    ["Timeline", "/timeline", <TimelineIcon key={++key} />,],
];