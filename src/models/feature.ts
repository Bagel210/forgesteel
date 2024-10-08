import { Ability } from './ability';
import { DamageModifier } from './damage-modifier';
import { FeatureField } from '../enums/feature-field';
import { FeatureType } from '../enums/feature-type';
import { Kit } from './kit';
import { KitType } from '../enums/kit';
import { SkillList } from '../enums/skill-list';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FeatureData { }

export interface FeatureAbilityData extends FeatureData {
	ability: Ability;
};

export interface FeatureBonusData extends FeatureData {
	field: FeatureField;
	value: number;
	valuePerLevel: number;
};

export interface FeatureChoiceData extends FeatureData {
	options: { feature: Feature, value: number }[];
	count: number;
	selected: Feature[];
}

export interface FeatureClassAbilityData extends FeatureData {
	cost: number;
	count: number;
	selectedIDs: string[];
}

export interface FeatureDamageModifierData extends FeatureData {
	modifiers: DamageModifier[];
}

export interface FeatureKitData extends FeatureData {
	types: KitType[];
	count: number;
	selected: Kit[];
};

export interface FeatureLanguageData extends FeatureData {
	options: string[];
	count: number;
	selected: string[];
};

export interface FeatureSkillData extends FeatureData {
	options: string[];
	listOptions: SkillList[];
	count: number;
	selected: string[];
};

export interface Feature {
	id: string;
	name: string;
	description: string;

	type: FeatureType;
	choice: boolean;

	data: FeatureData | null;
}
