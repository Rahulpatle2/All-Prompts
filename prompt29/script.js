function selectQueryType(selectedId) {
    // Reset styles for both buttons
    document.getElementById('generalEnquiry').classList.remove('bg-blue-500', 'text-white');
    document.getElementById('supportRequest').classList.remove('bg-blue-500', 'text-white');

    // Apply styles to the selected button
    document.getElementById(selectedId).classList.add('bg-blue-500', 'text-white');
}