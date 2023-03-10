import "./sample.scss";

const Descriptions = [
	"Écran d'accueil d'un site vitrine avec menu et texte en blanc sur une image de fond atténuée",
	"Plate-forme de réservation de séjour en ligne avec filtres par destination, dates et prix, et présentation des résultats sous forme de cartes",
	"Section d'un site vitrine avec image à gauche et texte sur la droite traversés par des bandes décoratives",
];

type SampleProps = {
	id: number;
};

const Sample = ({ id }: SampleProps) => {
	return (
		<a className="sample" href={`/assets/exemple${id}.png`}>
			<img src={`/assets/exemple${id}_small.png`} alt={Descriptions[id - 1]} />
		</a>
	);
};

export default Sample;
