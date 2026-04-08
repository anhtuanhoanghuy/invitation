function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([new Date()]);
    return ContentService.createTextOutput("OK");
  } catch (err) {
    return ContentService.createTextOutput(err.toString());
  }
}