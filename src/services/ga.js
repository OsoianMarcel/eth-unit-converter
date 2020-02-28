import Ga from '../libs/ga';
import {GA_ID} from '../configs/main';

const ga = new Ga(GA_ID);
ga.init();

export default ga;