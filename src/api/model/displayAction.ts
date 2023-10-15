/**
 * Ulanzi AWTRIX API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Color } from './color';


export interface DisplayAction { 
    /**
     * The text to display.
     */
    text?: string;
    textCase?: DisplayAction.TextCaseEnum;
    /**
     * Draw the text on top.
     */
    topText?: boolean;
    /**
     * Sets an offset for the x position of a starting text.
     */
    textOffset?: number;
    /**
     * Centers a short, non-scrollable text.
     */
    center?: boolean;
    color?: Color;
    gradient?: Array<Color>;
    blinkText?: number;
}
export namespace DisplayAction {
    export type TextCaseEnum = null | null | null;
    export const TextCaseEnum = {
        NUMBER_null: null as TextCaseEnum,
        NUMBER_null2: null as TextCaseEnum,
        NUMBER_null3: null as TextCaseEnum
    };
}


