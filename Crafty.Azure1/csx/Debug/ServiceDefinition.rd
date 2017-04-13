<?xml version="1.0" encoding="utf-8"?>
<serviceModel xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" name="Crafty.Azure1" generation="1" functional="0" release="0" Id="80902fe3-a726-4afb-a0bc-88bafbaeb071" dslVersion="1.2.0.0" xmlns="http://schemas.microsoft.com/dsltools/RDSM">
  <groups>
    <group name="Crafty.Azure1Group" generation="1" functional="0" release="0">
      <componentports>
        <inPort name="Crafty:Endpoint1" protocol="http">
          <inToChannel>
            <lBChannelMoniker name="/Crafty.Azure1/Crafty.Azure1Group/LB:Crafty:Endpoint1" />
          </inToChannel>
        </inPort>
      </componentports>
      <settings>
        <aCS name="Crafty:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/Crafty.Azure1/Crafty.Azure1Group/MapCrafty:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="CraftyInstances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/Crafty.Azure1/Crafty.Azure1Group/MapCraftyInstances" />
          </maps>
        </aCS>
      </settings>
      <channels>
        <lBChannel name="LB:Crafty:Endpoint1">
          <toPorts>
            <inPortMoniker name="/Crafty.Azure1/Crafty.Azure1Group/Crafty/Endpoint1" />
          </toPorts>
        </lBChannel>
      </channels>
      <maps>
        <map name="MapCrafty:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/Crafty.Azure1/Crafty.Azure1Group/Crafty/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapCraftyInstances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/Crafty.Azure1/Crafty.Azure1Group/CraftyInstances" />
          </setting>
        </map>
      </maps>
      <components>
        <groupHascomponents>
          <role name="Crafty" generation="1" functional="0" release="0" software="C:\Users\Jamie\Documents\Visual Studio 2013\Projects\Crafty\Crafty.Azure1\csx\Debug\roles\Crafty" entryPoint="base\x64\WaHostBootstrapper.exe" parameters="base\x64\WaIISHost.exe " memIndex="1792" hostingEnvironment="frontendadmin" hostingEnvironmentVersion="2">
            <componentports>
              <inPort name="Endpoint1" protocol="http" portRanges="80" />
            </componentports>
            <settings>
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;Crafty&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;Crafty&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;/r&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/Crafty.Azure1/Crafty.Azure1Group/CraftyInstances" />
            <sCSPolicyUpdateDomainMoniker name="/Crafty.Azure1/Crafty.Azure1Group/CraftyUpgradeDomains" />
            <sCSPolicyFaultDomainMoniker name="/Crafty.Azure1/Crafty.Azure1Group/CraftyFaultDomains" />
          </sCSPolicy>
        </groupHascomponents>
      </components>
      <sCSPolicy>
        <sCSPolicyUpdateDomain name="CraftyUpgradeDomains" defaultPolicy="[5,5,5]" />
        <sCSPolicyFaultDomain name="CraftyFaultDomains" defaultPolicy="[2,2,2]" />
        <sCSPolicyID name="CraftyInstances" defaultPolicy="[1,1,1]" />
      </sCSPolicy>
    </group>
  </groups>
  <implements>
    <implementation Id="c69febce-1c5b-4d5c-a937-55cb39306fbd" ref="Microsoft.RedDog.Contract\ServiceContract\Crafty.Azure1Contract@ServiceDefinition">
      <interfacereferences>
        <interfaceReference Id="f2675611-d1f2-4b43-ba6c-ab123ebcbbdc" ref="Microsoft.RedDog.Contract\Interface\Crafty:Endpoint1@ServiceDefinition">
          <inPort>
            <inPortMoniker name="/Crafty.Azure1/Crafty.Azure1Group/Crafty:Endpoint1" />
          </inPort>
        </interfaceReference>
      </interfacereferences>
    </implementation>
  </implements>
</serviceModel>