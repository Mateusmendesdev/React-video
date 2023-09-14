import { css } from "@emotion/react";

const fadeIn = css`
    &.page-enter {
        opacity: 0;
    }

    &.page-enter-active {
        opacity: 1;
        transition: opacity 500ms;
    }

    &.page-exit {
        opacity: 1;
    }

    &.page-exit-active {
        opacity: 0;
        transition: opacity 500ms;
    }
`;

export default fadeIn;
