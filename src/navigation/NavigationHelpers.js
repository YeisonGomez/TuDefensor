import NavigationService from './NavigationService';

export function navigateToPlayer(params) {
    NavigationService.navigate('player', params);
}