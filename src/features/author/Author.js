import React from "react";
import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

const Author = () => (
    <Container>
        <Header
            title="O autorze"
        />
        <Section
            title="Karolina Marciniszyn"
            body={
                <p>Moje studia dały mi inspirację do nauki programowania. Wybrałam specjalność <b>informatyka
                    medyczna</b> na kierunku <strong>inżynieria biomedyczna</strong>. Choć sam kierunek
                    nieszczególnie przypadł mi do gustu, tak zajęcia z programowania dawały mi bardzo dużo radości
                    i satysfakcji z efektów końcowych. Nie wyobrażam sobie iść w innym kierunku niż programowanie,
                    które stało się moim marzeniem, planem na przyszłość, do którego stopniowo dążę.</p>
            }
        />
    </Container>
);

export default Author;