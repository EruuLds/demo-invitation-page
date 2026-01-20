export function requestInvitation() {
    const phoneNumber = '5214621523479';
    const message = '¡Hola! Me interesa una invitación digital.';
    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return link;
}