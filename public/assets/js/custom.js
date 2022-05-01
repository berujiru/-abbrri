/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Version: 1.4.0
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Main Js File
*/

if (document.getElementById("copylink"))
    document.getElementById("copylink").addEventListener("click", function () {
        navigator.clipboard.writeText(window.location.href);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Link Copied',
            showConfirmButton: false,
            timer: 1500,
            showCloseButton: true
        })
    });