import { TAG_DETAILS } from '../content/interface';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface DoughnutProps {
    segments: Array<TAG_DETAILS>;
    icon: IconDefinition;
}
