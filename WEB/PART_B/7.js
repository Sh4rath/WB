function checkInfection(virusComposition, bloodComposition) {
  const regex = new RegExp([...bloodComposition].join(".*"), "i");
  if (regex.test(virusComposition)) {
    alert("Positive");
  } else {
    alert("Negative");
  }
}

// Example usage
const virusComposition = "coronavirus";
const bloodComposition = "ravus";
checkInfection(virusComposition, bloodComposition);
