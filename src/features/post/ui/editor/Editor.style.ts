import { styled } from 'styled-components';

export const EditorWrapper = styled.div`
  width: 80.8rem;
  font-family: 'Pretendard';

  .ql-editor b {
    font-weight: bold;
  }
  .ql-editor i {
    font-style: italic;
  }
  .ql-container.ql-snow {
    border-radius: 0 0 0.8rem 0.8rem;
    border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
    height: 12.8rem;
    font-family: 'Pretendard';
    background-color: ${({ theme }) => theme.color.WHITE};
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  }

  .ql-toolbar.ql-snow {
    box-sizing: border-box;
    font-family: 'Pretendard';
    background-color: ${({ theme }) => theme.color.WHITE};
    padding: 0.8rem 0;
    border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
    border-radius: 0.8rem 0.8rem 0 0;
  }

  .ql-snow.ql-toolbar button:hover:not(.ql-active),
  .ql-snow .ql-toolbar button:hover:not(.ql-active) {
    color: ${({ theme }) => theme.color.BLUE_50};
  }

  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
    fill: ${({ theme }) => theme.color.BLUE_50};
  }

  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
    stroke: ${({ theme }) => theme.color.BLUE_50};
  }

  .ql-snow .ql-stroke {
    stroke: ${({ theme }) => theme.color.BLUE_50};
  }

  .ql-snow .ql-stroke-miter {
    stroke: ${({ theme }) => theme.color.BLUE_50};
  }

  .ql-snow .ql-fill,
  .ql-snow .ql-stroke.ql-fill {
    fill: ${({ theme }) => theme.color.BLUE_50};
  }

  .quill > .ql-container > .ql-editor.ql-blank::before {
    ${({ theme }) => theme.typo.CAPTION_14};
    color: ${({ theme }) => theme.color.GRAY_50};
    font-style: normal;
  }

  ${({ theme }) => theme.device.MOBILE} {
    width: 100%;
  }
`;
