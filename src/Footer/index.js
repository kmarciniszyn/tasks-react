import { Wrapper, Paragraph, Link } from './styled';

const Footer = () => (
    <Wrapper>
        <Paragraph>
            Aplikacja wykonana w ramach kursu
            <Link href="https://youcode.pl">
                YouCode
            </Link>
        </Paragraph>
    </Wrapper>
);

export default Footer;