import { css } from "styled-components"
import { colors, screen } from "../../global/variables"
import chevron from "../../../images/icons/icon-chevron.svg"

const slideshowStyles = css`
  .carousel {
    position: relative;
    width: 100%;

    * {
      box-sizing: border-box;
    }

    img {
      width: 100%;
      display: inline-block;
      pointer-events: none;
    }

    .carousel {
      position: relative;
    }

    ${"" /* ------------------------ Arrows */}

    .control-arrow,
    &.carousel-slider .control-arrow {
      transition: all 0.15s ease-out;
      opacity: 0.75;
      position: absolute;
      z-index: 2;
      top: 2rem;
      background: 0 0;
      border: 0;
      font-size: 3.2rem;
      cursor: pointer;
      &:before {
        margin: 0 0.5rem;
        display: inline-block;
        border-top: 0.8rem solid transparent;
        border-bottom: 0.8rem solid transparent;
        content: "";
        background-image: url(${chevron});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 3.8rem 3.8rem;
        height: 3.8rem;
        width: 3.8rem;
      }
    }

    .control-arrow {
      &:hover {
        opacity: 1;
      }
    }
    .control-disabled.control-arrow {
      opacity: 0;
      cursor: inherit;
      display: none;
    }

    .control-prev.control-arrow {
      left: 0.5rem;
      &:before {
        content: "";
        transform: scaleX(-1);
      }
    }

    .control-next.control-arrow {
      right: 0.5rem;
      &:before {
        content: "";
      }
    }

    .control-arrow {
      outline: 0;
      border: 0;
      background: 0 0;
      top: 50%;
      margin-top: -1.3rem;
      font-size: 1.8rem;
    }

    ${"" /* ------------------------ Thumbnails */}
    .thumbs-wrapper {
      margin: 2rem;
      overflow: hidden;
    }

    .thumbs {
      transition: all 0.15s ease-in;
      transform: translate3d(0, 0, 0);
      position: relative;
      list-style: none;
      white-space: nowrap;
    }
    .thumb {
      transition: border 0.15s ease-in;
      display: inline-block;
      width: 8rem;
      margin-right: 0.6rem;
      white-space: nowrap;
      overflow: hidden;
      border: 0.3rem solid ${colors.white};
      padding: 0.2rem;
      &:focus {
        border: 0.3rem solid ${colors.gray200};
        outline: 0;
      }
      &.selected,
      &:hover {
        border: 0.3rem solid ${colors.gray800};
      }
      img {
        vertical-align: top;
      }
    }

    ${"" /* ------------------------ Contents */}

    &.carousel-slider {
      position: relative;
      margin: 0;
      overflow: hidden;
      .control-arrow {
        top: 0;
        color: ${colors.white};
        font-size: 2.6rem;
        bottom: 0;
        margin-top: 0;
        padding: 0.5rem;
      }
    }

    .slider-wrapper {
      overflow: hidden;
      margin: auto;
      width: 100%;
      transition: height 0.15s ease-in;
      &.axis-horizontal .slider {
        -ms-box-orient: horizontal;
        display: flex;
        .slide {
          flex-direction: column;
          flex-flow: column;
        }
      }
      &.axis-vertical {
        -ms-box-orient: horizontal;
        display: flex;
        .slider {
          flex-direction: column;
        }
      }
    }
    .slider {
      margin: 0;
      padding: 0;
      position: relative;
      list-style: none;
      width: 100%;
      &.animated {
        transition: all 0.35s ease-in-out;
      }
    }

    ${"" /* ------------------------ Slide */}

    .slide {
      min-width: 100%;
      margin: 0;
      position: relative;
      text-align: center;
      max-height: 28.6rem;
      > div {
        display: flex;
        height: 100%;
      }
      .gatsby-image-wrapper {
        height: 28.6rem;
        width: 100%;
      }
      img {
        width: 100%;
        display: block;
        vertical-align: top;
        border: 0;
        object-fit: cover;
      }
      iframe {
        display: inline-block;
        width: calc(100% - 8rem);
        margin: 0 4rem 4rem;
        border: 0;
      }
      .legend {
        transition: all 0.5s ease-in-out;
        position: absolute;
        bottom: 4rem;
        left: 50%;
        margin-left: -45%;
        width: 90%;
        border-radius: 1rem;
        background: ${colors.black};
        color: ${colors.white};
        padding: 1rem;
        font-size: 1.2rem;
        text-align: center;
        opacity: 0.25;
        transition: opacity 0.35s ease-in-out;
      }
    }
    &:hover .slide .legend {
      opacity: 1;
    }

    ${"" /* ------------------------ Dots */}

    .control-dots {
      position: absolute;
      bottom: 0;
      margin: 1rem 0;
      text-align: center;
      width: 100%;
      .dot {
        transition: opacity 0.25s ease-in;
        opacity: 0.3;
        box-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.9);
        background: ${colors.white};
        border-radius: 50%;
        width: 0.8rem;
        height: 0.8rem;
        cursor: pointer;
        display: inline-block;
        margin: 0 0.8rem;
        &.selected,
        &:hover {
          opacity: 1;
        }
      }
    }

    ${"" /* ------------------------ Status */}
    .carousel-status {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.5rem;
      font-size: 1rem;
      text-shadow: 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.9);
      color: ${colors.white};
    }
  }
`

export default slideshowStyles
