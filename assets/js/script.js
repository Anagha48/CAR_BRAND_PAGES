$(document).ready(function(){
    $(".btn-load").click(function(e){
        e.preventDefault();

        // Toggle visibility of hidden FAQ cards
        $(".faq-card").slideToggle();

        // Change button text based on visibility
        var btnText = $(this).find("span").text().trim();
        $(this).find("span").text(btnText === "Load More" ? "Load Less" : "Load More");
    });

  });
  
  $(document).ready(function () {
    $('.faq-btn').on('click', function () {
        var target = $(this).attr('data-bs-target'); 
        var isOpen = $(target).hasClass('show'); 

        // Reset all icons to plus and close other open sections
        $('.faq-btn').each(function () {
            var otherTarget = $(this).attr('data-bs-target');
            if (otherTarget !== target) {
                $(otherTarget).collapse('hide');
                $(this).find('.plus-icon').removeClass('d-none');
                $(this).find('.minus-icon').addClass('d-none');
            }
        });

        // Toggle the icon for the clicked button
        if (isOpen) {
            $(this).find('.plus-icon').removeClass('d-none');
            $(this).find('.minus-icon').addClass('d-none');
        } else {
            $(this).find('.plus-icon').addClass('d-none');
            $(this).find('.minus-icon').removeClass('d-none');
        }
    });

    // Ensure that Bootstrap collapse events update the icons correctly
    $('.collapse').on('hidden.bs.collapse', function () {
        var btn = $('[data-bs-target="#' + this.id + '"]');
        btn.find('.plus-icon').removeClass('d-none');
        btn.find('.minus-icon').addClass('d-none');
    });

    // Ensure padding is applied immediately when the collapse is shown
    $('.collapse').on('show.bs.collapse', function () {
        $(this).css('padding', '0.8rem 0.8rem');
    });
});