local display = false


RegisterCommand("allert", function(resource, args) 
      TriggerEvent("nui:on")
end)


RegisterNUICallback("viaa", function()
  TriggerServerEvent("on")
end)
RegisterNUICallback("viaa1", function()
  TriggerServerEvent("on1")
end)

RegisterNUICallback("exit", function(data)
  TriggerEvent("nui2:off")
end)


Citizen.CreateThread(function()
  while display do
      Citizen.Wait(0)
      
      DisableControlAction(0, 1, display) -- LookLeftRight
      DisableControlAction(0, 2, display) -- LookUpDown
      DisableControlAction(0, 142, display) -- MeleeAttackAlternate
      DisableControlAction(0, 18, display) -- Enter
      DisableControlAction(0, 322, display) -- ESC
      DisableControlAction(0, 106, display) -- VehicleMouseControlOverride
  end
end)
local on
RegisterNetEvent('nui2:on')
  AddEventHandler('nui2:on', function()
    SendNUIMessage({
      on = true
    })
end)
local pippo
RegisterNetEvent('nui1:on')
  AddEventHandler('nui1:on', function()
    SendNUIMessage({
      pippo = true
    })
end)
local spegni
RegisterNetEvent('nui2:off')
  AddEventHandler('nui2:off', function()
    SetNuiFocus(false, false)
    SendNUIMessage({
      spegni = true
    })
end)
  RegisterNetEvent('nui:on')
  AddEventHandler('nui:on', function()
    SetNuiFocus(true, true)
    SendNUIMessage({
      display = true
    })
end)

  

