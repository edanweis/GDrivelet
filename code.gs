function doGet(e) {
   
    var urlString = e.parameter.imgURL;
    
    var dropbox = "Saved";
    var folder, folders = DriveApp.getFoldersByName(dropbox);
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }

  
    var response = UrlFetchApp.fetch(urlString);
    var fileBlob = response.getAs('image/jpeg');
   // var fileName = fileBlob.getName();
    var file = folder.createFile(fileBlob);
    file.setDescription("link - " +urlString);     
 
}