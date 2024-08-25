// FilePond.registerPlugin(
//     FilePondPluginImagePreview,
//     FilePondPluginImageResize,
//     FilePondPluginImageEncode,

// )

// FilePond.parse(document.body);

document.addEventListener('DOMContentLoaded', function() {
    FilePond.registerPlugin(FilePondPluginImagePreview);
    FilePond.registerPlugin(FilePondPluginImageResize);
    FilePond.registerPlugin(FilePondPluginFileEncode);
    const inputElement = document.querySelector('input[type="file"]');
    const pond = FilePond.create(inputElement);

    pond.setOptions({
        allowImageResize: true,
        imagePreviewMaxHeight: 100,
        stylePanelAspectRatio: 150 / 100,
        imageResizeTargetWidth: 50,
        imageResizeTargetHeight: 75,
        imageResizeMode: 'contain',
        imageResizeUpsacel: false
    })


    // pond.setOptions({
    //     stylePanelAspectRatio: 150 / 100
    // })
    
    FilePond.parse(document.body);
  }); 