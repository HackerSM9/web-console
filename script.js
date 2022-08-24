let url = "https://www.instagram.com/instagram;
$.ajax({
    type: 'GET',
    url: url,
    error: function () {
        //..
    },
    success: function (data) {
        data = JSON.parse(data.split("window._sharedData = ")[1].split(";</script>")[0]).entry_data.ProfilePage[0].graphql;
        document.write(data);
    }
})
