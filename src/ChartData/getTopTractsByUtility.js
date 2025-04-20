export function getTopTractsByUtility(data) {
    const tractUtilityMap = {};
  
    data.forEach(({ '2020 Census Tract': tract, 'Electric Utility': utility }) => {
      if (!tract || !utility) return;
      if (!tractUtilityMap[tract]) tractUtilityMap[tract] = {};
      const utilities = utility.split('|');
      utilities.forEach(u => {
        const trimmed = u.trim();
        if (!trimmed) return;
        tractUtilityMap[tract][trimmed] = (tractUtilityMap[tract][trimmed] || 0) + 1;
      });
    });
  
    // Get top 5 tracts by total EV count
    const topTracts = Object.entries(tractUtilityMap)
      .map(([tract, utils]) => ({
        tract,
        total: Object.values(utils).reduce((sum, val) => sum + val, 0),
      }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 5)
      .map(item => item.tract);
  
    const utilitiesSet = new Set();
    topTracts.forEach(t => {
      Object.keys(tractUtilityMap[t]).forEach(u => utilitiesSet.add(u));
    });
  
    const utilityList = Array.from(utilitiesSet);
    const datasets = utilityList.map((utility, index) => ({
      label: utility,
      data: topTracts.map(t => tractUtilityMap[t][utility] || 0),
      backgroundColor: `hsl(${(index * 360) / utilityList.length}, 70%, 60%)`,
    }));
  
    return {
      labels: topTracts,
      datasets,
    };
  }
  