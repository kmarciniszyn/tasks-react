import { StyledNavLink, StyledNav, StyledUl, StyledLi } from './styled';
import { toTasks, toAuthor } from '../routes';

const Navigation = () => (
    <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledNavLink to={toTasks()}>
                        Lista zadań
                    </StyledNavLink>
                </StyledLi>
                <StyledLi>
                    <StyledNavLink to={toAuthor()}>
                        O autorze
                    </StyledNavLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
);

export default Navigation;