# Project Context & AI Guidelines

This project targets **Expo SDK 54**. Always consult the versioned Expo documentation at https://docs.expo.dev/versions/v54.0.0/ before implementing new Expo modules or APIs.

## Quick Commands
- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint checks

## Code Conventions
- **Routing**: File-based routing via `expo-router` located in `app/`.
- **Components**: Reusable components stored in `components/`.
- **Services**: External API and Firebase logic configured in `services/`.
- **Types**: Always use TypeScript with proper interfaces for props and states.
