
i
m
p
o
r
t
 
{
 
u
s
e
E
f
f
e
c
t
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
N
a
v
i
g
a
t
e
,
 
u
s
e
L
o
c
a
t
i
o
n
 
}
 
f
r
o
m
 
"
r
e
a
c
t
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
t
o
a
s
t
 
f
r
o
m
 
"
@
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
t
o
a
s
t
"
;


i
m
p
o
r
t
 
{
 
u
s
e
A
u
t
h
S
t
o
r
e
 
}
 
f
r
o
m
 
"
.
.
/
l
i
b
/
a
u
t
h
.
s
t
o
r
e
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
U
s
e
r
R
o
l
e
 
}
 
f
r
o
m
 
"
.
.
/
l
i
b
/
t
y
p
e
s
"
;




f
u
n
c
t
i
o
n
 
R
e
d
i
r
e
c
t
W
i
t
h
T
o
a
s
t
(
{
 
t
o
 
}
:
 
{
 
t
o
:
 
s
t
r
i
n
g
 
}
)
 
{


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
P
l
e
a
s
e
 
l
o
g
i
n
 
t
o
 
a
c
c
e
s
s
 
t
h
i
s
 
r
e
s
o
u
r
c
e
"
)
;


 
 
}
,
 
[
]
)
;


 
 
r
e
t
u
r
n
 
<
N
a
v
i
g
a
t
e
 
t
o
=
{
t
o
}
 
r
e
p
l
a
c
e
 
/
>
;


}




i
n
t
e
r
f
a
c
e
 
P
r
o
t
e
c
t
e
d
R
o
u
t
e
P
r
o
p
s
 
{


 
 
c
h
i
l
d
r
e
n
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
;


 
 
r
o
l
e
?
:
 
U
s
e
r
R
o
l
e
;


 
 
r
e
d
i
r
e
c
t
T
o
?
:
 
s
t
r
i
n
g
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
P
r
o
t
e
c
t
e
d
R
o
u
t
e
(
{
 
c
h
i
l
d
r
e
n
,
 
r
o
l
e
,
 
r
e
d
i
r
e
c
t
T
o
 
=
 
"
/
l
o
g
i
n
"
 
}
:
 
P
r
o
t
e
c
t
e
d
R
o
u
t
e
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
{
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
,
 
u
s
e
r
 
}
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
)
;


 
 
c
o
n
s
t
 
l
o
c
a
t
i
o
n
 
=
 
u
s
e
L
o
c
a
t
i
o
n
(
)
;




 
 
i
f
 
(
!
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
)
 
{


 
 
 
 
c
o
n
s
t
 
t
a
r
g
e
t
 
=
 
r
e
d
i
r
e
c
t
T
o
 
=
=
=
 
"
/
l
o
g
i
n
"


 
 
 
 
 
 
?
 
`
/
l
o
g
i
n
?
f
r
o
m
=
$
{
e
n
c
o
d
e
U
R
I
C
o
m
p
o
n
e
n
t
(
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
 
+
 
l
o
c
a
t
i
o
n
.
s
e
a
r
c
h
)
}
`


 
 
 
 
 
 
:
 
r
e
d
i
r
e
c
t
T
o
;


 
 
 
 
r
e
t
u
r
n
 
<
R
e
d
i
r
e
c
t
W
i
t
h
T
o
a
s
t
 
t
o
=
{
t
a
r
g
e
t
}
 
/
>
;


 
 
}




 
 
i
f
 
(
u
s
e
r
 
&
&
 
!
u
s
e
r
.
i
s
V
e
r
i
f
i
e
d
 
&
&
 
u
s
e
r
.
r
o
l
e
 
!
=
=
 
"
A
D
M
I
N
"
)
 
{


 
 
 
 
r
e
t
u
r
n
 
<
N
a
v
i
g
a
t
e
 
t
o
=
{
`
/
v
e
r
i
f
y
-
e
m
a
i
l
?
e
m
a
i
l
=
$
{
e
n
c
o
d
e
U
R
I
C
o
m
p
o
n
e
n
t
(
u
s
e
r
.
e
m
a
i
l
)
}
`
}
 
r
e
p
l
a
c
e
 
/
>
;


 
 
}




 
 
i
f
 
(
r
o
l
e
 
&
&
 
u
s
e
r
?
.
r
o
l
e
 
!
=
=
 
r
o
l
e
)
 
{


 
 
 
 
r
e
t
u
r
n
 
<
N
a
v
i
g
a
t
e
 
t
o
=
"
/
"
 
r
e
p
l
a
c
e
 
/
>
;


 
 
}




 
 
r
e
t
u
r
n
 
<
>
{
c
h
i
l
d
r
e
n
}
<
/
>
;


}


