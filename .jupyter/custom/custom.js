function getQueryStringValue(key)
{  
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
} 

var fileId = getQueryStringValue("fileId");
var siteUrl = getQueryStringValue("siteUrl");
var data_url =  siteUrl + '/api/access/datafile/' + fileId;
var meta_url = data_url + '/metadata/ddi';

Jupyter.notebook.events.one('kernel_ready.Kernel', () => {
    var kernel = IPython.notebook.kernel;
    kernel.execute("data_url='" + data_url + "'");
    kernel.execute("meta_url='" + meta_url + "'");
    //kernel.execute("file_id='".concat(getQueryStringValue("fileId")).concat("'"));
    //kernel.execute("site_url='".concat(getQueryStringValue("siteUrl")).concat("'"));
});
