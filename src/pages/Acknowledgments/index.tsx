import React from "react";
import { S } from "../../styles/styles";
import RContainer from "../../components/RContainer";
import { styles } from "./styles";

export default function Acknowledgments(props: any) {
	return (
		<RContainer >
			<S.Container>
				<S.TextDefault style={styles.text} > Obrigado por participar da pesquisa! {"\n\n"} Aguardamos você no próximo ano! </S.TextDefault>
			</S.Container>
		</RContainer >
	);
}