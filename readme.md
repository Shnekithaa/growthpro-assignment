# Business Dashboard

A modern, responsive business analytics dashboard built with React and Tailwind CSS. This dashboard provides AI-powered business insights, SEO headline generation, and business profile analytics.

## Features

- Business Profile Analysis with Google ratings and review counts
- AI-Generated SEO Headlines with regeneration capability
- Real-time Analytics dashboard
- Responsive Design for all devices
- Modern UI with smooth animations
- Form validation and error handling

## Technology Stack

- **React** - Frontend framework with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **JavaScript ES6+** - Modern JavaScript features

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd business-dashboard
```

2. Install dependencies:
```bash
npm install
npm install react lucide-react
```

3. Start the development server:
```bash
npm start
```

## Usage

1. Enter your business name and location in the form
2. Click "Get Business Insights" to fetch analytics data
3. View your business rating, review count, and profile information
4. Use the AI-powered headline generator for SEO optimization
5. Click "Regenerate" to get new headline suggestions

## API Integration

The dashboard includes simulated API calls that can be replaced with real backend endpoints:

- `fetchBusinessData(name, location)` - Fetches business analytics data
- `regenerateHeadline(name, location)` - Generates AI-powered headlines

Replace these with actual API endpoints for production use.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ support required
- CSS Grid and Flexbox support required

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the GitHub repository.