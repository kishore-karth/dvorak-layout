import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 150px;
  max-height: 400px;

  resize: both;              /* bottom-right resize handle */
  overflow: auto;            /* scrollbar */

  padding: 12px;
  font-size: 16px;
  font-family: monospace;

  border: 1px solid #ccc;
  border-radius: 6px;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }
`;

export const StyledOutput = styled.pre`
  width: 100%;
  min-height: 150px;
  max-height: 400px;

  overflow: auto;
  resize: both;             /* allow resizing bottom-right */
  padding: 12px;

  border: 1px solid #ccc;
  border-radius: 6px;
  font-family: monospace;

  white-space: pre-wrap;    /* preserves newlines and wraps long lines */
  background-color: #f9f9f9;
`;
