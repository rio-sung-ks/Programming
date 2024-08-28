async function updateDOM() {
    try {
        const response = await fetch('/api/data');  // 서버에서 데이터를 가져옴
        const data = await response.json();  // 데이터를 JSON 형식으로 변환

        if (data && data.length > 0) {
            var text = data[0].someProperty || "defaultText";
            document.getElementById("test").textContent = text;
        }

    } catch (error) {
        console.error("Error fetching and updating DOM:", error);
    }
}

updateDOM()