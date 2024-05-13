// Replacing text
document.body.innerHTML = document.body.innerHTML.replace(/statbar-(\d+)/g, '<div class="v-stack" style="margin:0; height:100%; align-items:center;"><progress-bar class="progress-bar" role="progressbar" aria-valuemin="0" style="--progress: 0.$1;" aria-valuemax="100" aria-valuenow="$1"></progress-bar></div>');

// Define the regular expression pattern to match "number cm x number cm x number cm"
const regex = /(\d+) cm x (\d+) cm x (\d+) cm/g;

// Get all the <div> elements with the class "feature-chart__table"
const featureDivs = document.querySelectorAll('.feature-chart__table');

// Iterate through each <div> and update the text content
featureDivs.forEach((div) => {
  // Get the original HTML content of the <div>
  const originalHtml = div.innerHTML;

  // Replace the pattern within the <div> content
  const updatedHtml = originalHtml.replace(regex, (match, num1, num2, num3) => {
    // Convert the numbers from centimeters to inches
    const inches1 = parseFloat(num1) * 0.393701;
    const inches2 = parseFloat(num2) * 0.393701;
    const inches3 = parseFloat(num3) * 0.393701;

    // Construct the updated string
    return `${num1} cm x ${num2} cm x ${num3} cm, ${inches1.toFixed(2)} in x ${inches2.toFixed(2)} in x ${inches3.toFixed(2)} in`;
  });

  // Update the <div> content with the modified HTML
  div.innerHTML = updatedHtml;
});

