import { SpreadsheetData } from '@/spreadsheetTypes';
/**
 * Retrieves data from a specified Google Sheets spreadsheet and range.
 *
 * This function uses the Google Sheets API to fetch data from a specified
 * spreadsheet.
 * It requires the spreadsheet ID and the name of the spreadsheet
 * range to retrieve the data from.
 * The function assumes that the
 * 'GOOGLE_APPLICATION_CREDENTIALS' environment variable is set with the path
 * to the Google service account credentials JSON file. It returns the data
 * from the spreadsheet.
 *
 * Set up the 'GOOGLE_APPLICATION_CREDENTIALS' environment variable:
 * export GOOGLE_APPLICATION_CREDENTIALS=path_to_your_credentials.json
 *
 * @param {string} spreadsheetId - The ID of the Google Sheets spreadsheet.
 * @param {string} range - The name of the range in the spreadsheet to retrieve data from.
 * @returns {Promise<Array<Array<string | number>>>} - A promise that resolves with the data from the spreadsheet as an array of arrays, each representing a row of data.
 * @throws {Error} - Throws an error if there is an issue with fetching data from the spreadsheet.
 *
 * @example
 * ```
 * const spreadsheetId = 'your_spreadsheet_id_here';
 * const range = 'Sheet1!A1:D5';
 * (async () => {
 *   try {
 *     const data = await getDataFromSheet(spreadsheetId, range);
 *     console.log(data);
 *   } catch (error) {
 *     console.error(error);
 *   }
 * })();
 * ```
 */
export declare function getDataFromSheet(spreadsheetId: string, range: string): Promise<SpreadsheetData>;
