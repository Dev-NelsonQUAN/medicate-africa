import styled from 'styled-components'

const Btn = styled.div`
    background: ${(props) => props.bg || '#2490EB'};
    color: ${(props) => props.color || 'white'};
    padding: ${(props) => props.padding || "10px 20px"};
    border-radius: ${(props) => props.br || "5px"};
    border: ${(props) => props.border || "none"};
    display: ${(props) => props.display || 'flex'};
    align-items: ${(props) => props.ai || "center"};
    gap: ${(props) => props.gap || "10px"};
    cursor: pointer;
`

export default Btn