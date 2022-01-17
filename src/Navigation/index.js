import { StyledNavLink, StyledNav, StyledUl, StyledLi } from './styled';

const Navigation = () => (
    <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledNavLink to="/zadania">
                        Lista zadań
                    </StyledNavLink>
                </StyledLi>
                <StyledLi>
                    <StyledNavLink to="/autor">
                        O autorze
                    </StyledNavLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
);

export default Navigation;