import { Button, Card } from "@vkontakte/vkui";

import './WordItem.css'

const WordItem = ({word}) => {
	return ( 
		<Card className="word-item">{word}</Card>
	 );
}
 
export default WordItem;