import Intro from "./Intro";
import About from "./About";
import Work from "./Work";
import Photos from "./Photos";
import Text from "./Text";
import Review from "./Review";
import Faq from "./Faq";
import Where from "./Where";
import Contact from "./Contact";
import Call from "./layers/Call";

import axios from "axios";
import React from "react";
import PropTypes from "prop-types";
import NewIntro from "./NewIntro";
import NewAbout from "./NewAbout";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            call_layer: false,
        };
    }
    render() {
        return (
            <div className="App">
                {this.state.call_layer ? (
                    <Call
                        openLayer={this.openLayer.bind(this)}
                        sendInfo={this.sendInfo.bind(this)}
                    />
                ) : (
                    ""
                )}
                <NewIntro
                    clickCall={this.clickCall.bind(this)}
                    openLayer={this.openLayer.bind(this)}
                    sendInfo={this.sendInfo.bind(this)}
                />
                {/* <Intro
                    clickCall={this.clickCall.bind(this)}
                    openLayer={this.openLayer.bind(this)}
                    sendInfo={this.sendInfo.bind(this)}
                /> */}
                <NewAbout />
                {/* <About /> */}
                <Work clickCall={this.clickCall.bind(this)} />
                <Photos
                    clickCall={this.clickCall.bind(this)}
                    openLayer={this.openLayer.bind(this)}
                />
                <Text
                    forText={forText[0]}
                    clickCall={this.clickCall.bind(this)}
                    openLayer={this.openLayer.bind(this)}
                />
                <Review
                    clickCall={this.clickCall.bind(this)}
                    openLayer={this.openLayer.bind(this)}
                />
                <Text
                    forText={forText[1]}
                    clickCall={this.clickCall.bind(this)}
                    openLayer={this.openLayer.bind(this)}
                />
                <Faq
                    clickCall={this.clickCall.bind(this)}
                    openLayer={this.openLayer.bind(this)}
                />
                <Where />
                <Contact
                    openLayer={this.openLayer.bind(this)}
                    sendInfo={this.sendInfo.bind(this)}
                />
            </div>
        );
    }

    async sendInfo(type, num) {
        let text = "";
        if (type === "calling") {
            text = "Кто-то нажал на кнопку позвонить";
        } else {
            // data = {
            //     name: "Просит позвонить!",
            //     tel: num,
            // };
            text = `Просит позвонить!\n${num}`;
        }

        const token = "";
        const users = [""];
        const api_url =
            "https://api.telegram.org/bot[TOKEN]/sendMessage?chat_id=[USER_ID]&parse_mode=markdown&text=";

        if (token.length < 1) return;
        let send_url = api_url.replace("[TOKEN]", token);
        users.forEach(async (account) => {
            await axios.get(
                encodeURI(send_url.replace("[USER_ID]", account) + text)
            );
        });
        if (type !== "calling") {
            alert("Ми вам зателефонуємо ближайшим часом! Дякую");
        }
    }

    openLayer() {
        const { call_layer } = this.state;
        this.setState({
            call_layer: !call_layer,
        });
    }

    clickCall() {
        const btn_call = document.getElementById("callUs");
        btn_call.click();
    }
}

export default App;

const forText = [
    {
        title: "Які послуги ми надаємо?",
        p_one: "На сьогоднішній день ми активно надємо послуги буріння артезіанських свердловин завдяки наявності спеціальної техніки, а також персоналу, який досвідчено та професійно нею керує. У своїй роботі ми використовуємо сучасні машини та техніку, але в той же час,намагаємося враховувати умови у яких створюватиметься свердловина. Відштовхуючись від них, високопрофільні фахівці нашої компанії,вибирають найпридатніший для буріння метод. Ми пропонуємо:",
        list: [
            "Буріння свердловин малогабаритною установкою, яка передбачає комфортне розміщення техніки навіть на невеликі ділянки",
            "Ручне буріння – специфічний вид робіт, часто застосовується для важкодоступних місць. можливо застосування цього способу у комбінованому вигляді із паралельним використанням механічної техніки.",
            "Комбіновані методи - нас не лякають виникаючі на шляху перешкоди та труднощі! Працюємо з пісками та слабостійкими породами, застосовуючи спеціально розроблені методи Ваш запит - свердловина для води Черкаси - буде виконано незалежно від складнощів процесу.",
            "Буріння машиною - передбачає великомасштабні роботи на великих та просторих територіях. Даний вид відноситься до ряду робіт з використанням великогабаритної техніки.",
        ],
        p_two: "Якщо говорити про тимчасові витрати на виконання буріння, то такі роботи займають в середньому від 5 до 15 годин. Це безпосередньо залежить від порід ґрунту - робити свердловину на піщаній ділянці на порядок простіше, ніж на глиняному ґрунті.",
    },
    {
        title: "Від чого залежить ціна буріння свердловин",
        p_one: "Ціна завжди демократична та обумовлена ​​тими процесами, які необхідно виконати майстру, щоб домогтися поставленого завдання. Вартість свердловини  залежить від низки моментів, які можуть вплинути на хід роботи. Клієнт може замовити буріння, що потребує особливої ​​терміновості - цей чинник також може проводити зміну стандартної ціни. Ціна залежить від низки факторів:",
        list: [
            "Буріння свердловин у важкодоступних місцях безпосередньо впливає на ціну",
            "Глибина та діаметр свердловини на воду",
            "Конструкція та величина самої свердловини",
            "Потреба кількості води.",
        ],

        p_two: "Вартість попередньо узгоджується із замовником. Оплата здійснюється лише після завершення робіт.",
    },
    {
        title: "title",
        p_one: "p_one",
        list: ["list", "list"],
        p_two: "p_two",
    },
];
