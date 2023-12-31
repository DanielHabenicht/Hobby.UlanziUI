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


export interface ApiSettingsGet200Response { 
    /**
     * MATrix Power: Whether the screen currently is on or off.
     */
    MATP: boolean;
    /**
     * Automatic BRIghtness: Whether the screen auto brightness function is currently on or off.
     */
    ABRI: boolean;
    /**
     * BRIghtness: Current brightness settings.
     */
    BRI: number;
    /**
     * Auto TRANSition: Whether the clock changes screen automatically.
     */
    ATRANS: boolean;
    /**
     * Text COLor
     */
    TCOL: number;
    /**
     * Transition EFFect
     */
    TEFF: number;
    /**
     * Transition SPEED: Speed take for a transition from one app to another.
     */
    TSPEED: number;
    /**
     * App TIME: Time until automatic change to the next app.
     */
    ATIME: number;
    /**
     * Time MODE: Display Style of the time.
     */
    TMODE: number;
    /**
     * Calendar Header COLor
     */
    CHCOL: number;
    /**
     * Calendar Text COLor
     */
    CTCOL: number;
    /**
     * Calendar Body COLor
     */
    CBCOL: number;
    /**
     * Time FORMAT for the Time App
     */
    TFORMAT: string;
    /**
     * Date FORMAT for the Time App
     */
    DFORMAT: string;
    /**
     * Start Of the week Monday: Whether the week should start with monday (true) or sunday (false).
     */
    SOM: boolean;
    /**
     * CELsius or Fahrenheit?
     */
    CEL: boolean;
    /**
     * BLOCK Navigation: Block physical button actions.
     */
    BLOCKN: boolean;
    /**
     * MAT\'
     */
    MAT: number;
    SOUND: boolean;
    GAMMA: number;
    /**
     * Display text in uppercase.
     */
    UPPERCASE: boolean;
    CCORRECTION: string;
    CTEMP: string;
    WD: boolean;
    WDCA: number;
    WDCI: number;
    TIME_COL?: number;
    DATE_COL?: number;
    HUM_COL?: number;
    TEMP_COL?: number;
    BAT_COL?: number;
    /**
     * Scroll SPEED: Percentage modifier of the original scroll speed.
     */
    SSPEED: number;
    /**
     * TIMe: Whether the Time App is activated.
     */
    TIM: boolean;
    /**
     * DATe: Whether the Date App is activated.
     */
    DAT: boolean;
    /**
     * HUMidity: Whether the Humidity App is activated.
     */
    HUM: boolean;
    /**
     * TEMPerature: Whether the Temperature App is activated.
     */
    TEMP: boolean;
    /**
     * BATtery: Whether the Battery App is activated.
     */
    BAT: boolean;
}

