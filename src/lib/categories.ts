const categoryColors: Record<string, string> = {
  'Web Development': 'bg-accent-green',
  'Data Visualization': 'bg-accent-blue',
  'Immersive Installation': 'bg-accent-orange',
  'Digital Art': 'bg-accent-orange',
}

export const categoryBg = (category?: string) =>
  (category && categoryColors[category]) || 'bg-accent-purple'
