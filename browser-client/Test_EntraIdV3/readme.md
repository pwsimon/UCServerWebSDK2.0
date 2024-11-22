# Debugging (Browser)
compilieren mit: `npm run build`
using Browser Dev-Tools (F12)

# (quick) Development
dev server mit: `npm run dev`

Dieses SDK-Sample ist/soll nicht teil des, private, estos-GitHub, Repository: ProCall sein.
Wir publishen/maintainen das mit dem public (Fork).
Nur so ist sichergestellt bzw. eine motivation das eine "community" beitraegt ...

# SSO Single-Tenant, Multiple-AppRegistration

wir Nutzen zwar nur *einen* Account mit dem: <Tenant> werden aber *immer* nach dem <Account> geprompted?
liegt daran das mein estos (Tenant) immer mit aufgelisted wird!
wenn ich den: account als queryParam (login_hint) beim login mitliefere wird die Wizard-Seite uebersprungen.

einloggen mit: LoginAppSSO (f818731d) => prompt for User/Password (leave page without explizit Logout)
einloggen mit: PROCALL5283 (164d6c58) => prompt for User *kein* Password/MFA

