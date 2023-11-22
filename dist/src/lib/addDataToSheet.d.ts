import { AppendDataResponse } from '@/spreadsheetTypes';
/**
 * Adds specified data to a Google Spreadsheet.
 * Requires the ID of the spreadsheet and the name of the sheet where data will be added.
 * The function assumes that the
 * 'GOOGLE_APPLICATION_CREDENTIALS' environment variable is set with the path
 * to the Google service account credentials JSON file. It returns the data
 * from the spreadsheet.
 *
 * @param {string} spreadsheetId - The ID of the spreadsheet to which data is being added.
 * @param {string} sheetTitle - The name of the sheet where data will be added.
 * @param {Array<Array<string | number>>} values - Array of data to be added to the spreadsheet. Each sub-array corresponds to a row in the spreadsheet.
 * @returns {Promise<AppendDataResponse>} - A promise containing the response from the Google Sheets API.
 * @throws {Error} - Throws an error if there's an issue with the request to the Google Sheets API.
 *
 * @example
 * ```
 * // Spreadsheet ID and sheet name
 * const spreadsheetId = 'your-spreadsheet-id';
 * const sheetTitle = 'your-sheet-name';
 *
 * // Data to be added
 * const data = [
 *   ['Header1', 'Header2', 'Header3'],
 *   ['Value1', 'Value2', 'Value3']
 * ];
 *
 * // Asynchronously call the function
 * const run = async () => {
 *   try {
 *     const response = await addDataToSheet(spreadsheetId, sheetTitle, data);
 *     console.log('Added data:', response);
 *   } catch (error) {
 *     console.error('Error:', error);
 *   }
 * };
 *
 * run();
 * ```
 */
export declare function addDataToSheet(spreadsheetId: string, sheetTitle: string, values: Array<Array<string | number>>): Promise<AppendDataResponse>;
