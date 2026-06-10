export const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.18
        }
    },
};

export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 25
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7
        },
    },
};

export const timelineItem = {
    hidden: {
        opacity: 0,
        y: 35
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        },
    },
};