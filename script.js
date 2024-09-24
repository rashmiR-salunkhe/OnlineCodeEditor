$(document).ready(function() {
    $(".codeContainer").hide();

    $(".toggle").click(function() {
        var targetEditor = "#" + $(this).attr("id") + "Container";

        $(targetEditor).toggle();  

        // Toggle the 'selected' class for the clicked button
        $(this).toggleClass("selected");
    });

    // Function to run the code and display it in the result iframe
    $("#run").on("click", function() {
        // Get the code from HTML, CSS, and JS editors
        var htmlCode = $("#htmlCode").val();
        var cssCode = $("#cssCode").val();
        var jsCode = $("#jsCode").val();

        var resultContent = `
            <html>
                <head>
                    <style>${cssCode}</style>
                </head>
                <body>
                    ${htmlCode}
                    <script>${jsCode}<\/script>
                </body>
            </html>
        `;

        var iframe = document.getElementById('result');
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(resultContent);
        iframeDocument.close();
    });
});
