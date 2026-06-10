
i
m
p
o
r
t
 
a
p
i
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
a
x
i
o
s
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


 
 
F
u
n
d
i
n
g
S
i
g
n
a
l
,


 
 
F
u
n
d
i
n
g
S
i
g
n
a
l
L
i
s
t
R
e
s
p
o
n
s
e
,


 
 
F
u
n
d
i
n
g
S
i
g
n
a
l
S
o
u
r
c
e
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
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




e
x
p
o
r
t
 
t
y
p
e
 
S
i
g
n
a
l
K
i
n
d
 
=
 
"
f
u
n
d
i
n
g
"
 
|
 
"
h
i
r
i
n
g
"
 
|
 
"
p
r
o
d
u
c
t
_
l
a
u
n
c
h
"
 
|
 
"
a
l
l
"
;




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
S
i
g
n
a
l
s
Q
u
e
r
y
 
{


 
 
p
a
g
e
:
 
n
u
m
b
e
r
;


 
 
l
i
m
i
t
:
 
n
u
m
b
e
r
;


 
 
s
o
r
t
?
:
 
"
r
e
c
e
n
t
"
 
|
 
"
a
m
o
u
n
t
"
;


 
 
s
e
a
r
c
h
?
:
 
s
t
r
i
n
g
;


 
 
s
o
u
r
c
e
?
:
 
s
t
r
i
n
g
;


 
 
k
i
n
d
?
:
 
S
i
g
n
a
l
K
i
n
d
;


 
 
h
i
r
i
n
g
O
n
l
y
?
:
 
b
o
o
l
e
a
n
;


 
 
s
t
a
t
u
s
?
:
 
"
A
C
T
I
V
E
"
 
|
 
"
S
T
A
L
E
"
 
|
 
"
A
R
C
H
I
V
E
D
"
 
|
 
"
A
L
L
"
;


}




e
x
p
o
r
t
 
a
s
y
n
c
 
f
u
n
c
t
i
o
n
 
q
u
e
r
y
S
i
g
n
a
l
s
(
q
:
 
S
i
g
n
a
l
s
Q
u
e
r
y
)
:
 
P
r
o
m
i
s
e
<
F
u
n
d
i
n
g
S
i
g
n
a
l
L
i
s
t
R
e
s
p
o
n
s
e
>
 
{


 
 
c
o
n
s
t
 
p
a
r
a
m
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
b
o
o
l
e
a
n
>
 
=
 
{


 
 
 
 
p
a
g
e
:
 
q
.
p
a
g
e
,


 
 
 
 
l
i
m
i
t
:
 
q
.
l
i
m
i
t
,


 
 
 
 
s
o
r
t
:
 
q
.
s
o
r
t
 
?
?
 
"
r
e
c
e
n
t
"
,


 
 
}
;


 
 
i
f
 
(
q
.
s
e
a
r
c
h
)
 
p
a
r
a
m
s
[
"
s
e
a
r
c
h
"
]
 
=
 
q
.
s
e
a
r
c
h
;


 
 
i
f
 
(
q
.
s
o
u
r
c
e
)
 
p
a
r
a
m
s
[
"
s
o
u
r
c
e
"
]
 
=
 
q
.
s
o
u
r
c
e
;


 
 
i
f
 
(
q
.
k
i
n
d
 
&
&
 
q
.
k
i
n
d
 
!
=
=
 
"
a
l
l
"
)
 
p
a
r
a
m
s
[
"
k
i
n
d
"
]
 
=
 
q
.
k
i
n
d
;


 
 
i
f
 
(
q
.
h
i
r
i
n
g
O
n
l
y
)
 
p
a
r
a
m
s
[
"
h
i
r
i
n
g
O
n
l
y
"
]
 
=
 
t
r
u
e
;


 
 
i
f
 
(
q
.
s
t
a
t
u
s
)
 
p
a
r
a
m
s
[
"
s
t
a
t
u
s
"
]
 
=
 
q
.
s
t
a
t
u
s
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
 
}
 
=
 
a
w
a
i
t
 
a
p
i
.
g
e
t
<
F
u
n
d
i
n
g
S
i
g
n
a
l
L
i
s
t
R
e
s
p
o
n
s
e
>
(
"
/
s
i
g
n
a
l
s
"
,
 
{
 
p
a
r
a
m
s
 
}
)
;


 
 
r
e
t
u
r
n
 
d
a
t
a
;


}




e
x
p
o
r
t
 
a
s
y
n
c
 
f
u
n
c
t
i
o
n
 
g
e
t
S
i
g
n
a
l
B
y
I
d
(
i
d
:
 
n
u
m
b
e
r
)
:
 
P
r
o
m
i
s
e
<
F
u
n
d
i
n
g
S
i
g
n
a
l
>
 
{


 
 
c
o
n
s
t
 
{
 
d
a
t
a
 
}
 
=
 
a
w
a
i
t
 
a
p
i
.
g
e
t
<
{
 
s
i
g
n
a
l
:
 
F
u
n
d
i
n
g
S
i
g
n
a
l
 
}
>
(
`
/
s
i
g
n
a
l
s
/
$
{
i
d
}
`
)
;


 
 
r
e
t
u
r
n
 
d
a
t
a
.
s
i
g
n
a
l
;


}




e
x
p
o
r
t
 
a
s
y
n
c
 
f
u
n
c
t
i
o
n
 
g
e
t
S
i
g
n
a
l
S
o
u
r
c
e
s
(
)
:
 
P
r
o
m
i
s
e
<
{
 
s
o
u
r
c
e
s
:
 
F
u
n
d
i
n
g
S
i
g
n
a
l
S
o
u
r
c
e
[
]
 
}
>
 
{


 
 
c
o
n
s
t
 
{
 
d
a
t
a
 
}
 
=
 
a
w
a
i
t
 
a
p
i
.
g
e
t
<
{
 
s
o
u
r
c
e
s
:
 
F
u
n
d
i
n
g
S
i
g
n
a
l
S
o
u
r
c
e
[
]
 
}
>
(
"
/
s
i
g
n
a
l
s
/
s
o
u
r
c
e
s
"
)
;


 
 
r
e
t
u
r
n
 
d
a
t
a
;


}




/
/
 
A
d
m
i
n
-
o
n
l
y
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
S
i
g
n
a
l
C
r
e
a
t
e
P
a
y
l
o
a
d
 
{


 
 
c
o
m
p
a
n
y
N
a
m
e
:
 
s
t
r
i
n
g
;


 
 
s
o
u
r
c
e
U
r
l
:
 
s
t
r
i
n
g
;


 
 
c
o
m
p
a
n
y
W
e
b
s
i
t
e
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
l
o
g
o
U
r
l
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
f
u
n
d
i
n
g
R
o
u
n
d
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
f
u
n
d
i
n
g
A
m
o
u
n
t
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
a
m
o
u
n
t
U
s
d
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
a
n
n
o
u
n
c
e
d
A
t
?
:
 
s
t
r
i
n
g
;


 
 
h
q
L
o
c
a
t
i
o
n
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
i
n
d
u
s
t
r
y
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
d
e
s
c
r
i
p
t
i
o
n
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
i
n
v
e
s
t
o
r
s
?
:
 
s
t
r
i
n
g
[
]
;


 
 
t
a
g
s
?
:
 
s
t
r
i
n
g
[
]
;


 
 
c
a
r
e
e
r
s
U
r
l
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
h
i
r
i
n
g
S
i
g
n
a
l
?
:
 
b
o
o
l
e
a
n
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
S
i
g
n
a
l
U
p
d
a
t
e
P
a
y
l
o
a
d
 
e
x
t
e
n
d
s
 
P
a
r
t
i
a
l
<
S
i
g
n
a
l
C
r
e
a
t
e
P
a
y
l
o
a
d
>
 
{


 
 
s
t
a
t
u
s
?
:
 
"
A
C
T
I
V
E
"
 
|
 
"
S
T
A
L
E
"
 
|
 
"
A
R
C
H
I
V
E
D
"
;


}




e
x
p
o
r
t
 
a
s
y
n
c
 
f
u
n
c
t
i
o
n
 
c
r
e
a
t
e
S
i
g
n
a
l
(
p
a
y
l
o
a
d
:
 
S
i
g
n
a
l
C
r
e
a
t
e
P
a
y
l
o
a
d
)
:
 
P
r
o
m
i
s
e
<
F
u
n
d
i
n
g
S
i
g
n
a
l
>
 
{


 
 
c
o
n
s
t
 
{
 
d
a
t
a
 
}
 
=
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
<
{
 
s
i
g
n
a
l
:
 
F
u
n
d
i
n
g
S
i
g
n
a
l
 
}
>
(
"
/
s
i
g
n
a
l
s
"
,
 
p
a
y
l
o
a
d
)
;


 
 
r
e
t
u
r
n
 
d
a
t
a
.
s
i
g
n
a
l
;


}




e
x
p
o
r
t
 
a
s
y
n
c
 
f
u
n
c
t
i
o
n
 
u
p
d
a
t
e
S
i
g
n
a
l
(


 
 
i
d
:
 
n
u
m
b
e
r
,


 
 
p
a
y
l
o
a
d
:
 
S
i
g
n
a
l
U
p
d
a
t
e
P
a
y
l
o
a
d
,


)
:
 
P
r
o
m
i
s
e
<
F
u
n
d
i
n
g
S
i
g
n
a
l
>
 
{


 
 
c
o
n
s
t
 
{
 
d
a
t
a
 
}
 
=
 
a
w
a
i
t
 
a
p
i
.
p
a
t
c
h
<
{
 
s
i
g
n
a
l
:
 
F
u
n
d
i
n
g
S
i
g
n
a
l
 
}
>
(
`
/
s
i
g
n
a
l
s
/
$
{
i
d
}
`
,
 
p
a
y
l
o
a
d
)
;


 
 
r
e
t
u
r
n
 
d
a
t
a
.
s
i
g
n
a
l
;


}




e
x
p
o
r
t
 
a
s
y
n
c
 
f
u
n
c
t
i
o
n
 
d
e
l
e
t
e
S
i
g
n
a
l
(
i
d
:
 
n
u
m
b
e
r
)
:
 
P
r
o
m
i
s
e
<
v
o
i
d
>
 
{


 
 
a
w
a
i
t
 
a
p
i
.
d
e
l
e
t
e
(
`
/
s
i
g
n
a
l
s
/
$
{
i
d
}
`
)
;


}




e
x
p
o
r
t
 
a
s
y
n
c
 
f
u
n
c
t
i
o
n
 
t
r
i
g
g
e
r
I
n
g
e
s
t
(
)
:
 
P
r
o
m
i
s
e
<
{


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
r
e
s
u
l
t
s
:
 
A
r
r
a
y
<
{


 
 
 
 
s
o
u
r
c
e
:
 
s
t
r
i
n
g
;


 
 
 
 
s
i
g
n
a
l
s
F
o
u
n
d
:
 
n
u
m
b
e
r
;


 
 
 
 
s
i
g
n
a
l
s
C
r
e
a
t
e
d
:
 
n
u
m
b
e
r
;


 
 
 
 
s
i
g
n
a
l
s
U
p
d
a
t
e
d
:
 
n
u
m
b
e
r
;


 
 
 
 
e
r
r
o
r
?
:
 
s
t
r
i
n
g
;


 
 
 
 
d
u
r
a
t
i
o
n
:
 
n
u
m
b
e
r
;


 
 
}
>
;


}
>
 
{


 
 
c
o
n
s
t
 
{
 
d
a
t
a
 
}
 
=
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
(
"
/
s
i
g
n
a
l
s
/
t
r
i
g
g
e
r
"
)
;


 
 
r
e
t
u
r
n
 
d
a
t
a
 
a
s
 
n
e
v
e
r
;


}




e
x
p
o
r
t
 
a
s
y
n
c
 
f
u
n
c
t
i
o
n
 
c
l
e
a
n
u
p
N
o
i
s
e
(
)
:
 
P
r
o
m
i
s
e
<
{
 
r
e
m
o
v
e
d
:
 
n
u
m
b
e
r
 
}
>
 
{


 
 
c
o
n
s
t
 
{
 
d
a
t
a
 
}
 
=
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
<
{
 
r
e
m
o
v
e
d
:
 
n
u
m
b
e
r
 
}
>
(
"
/
s
i
g
n
a
l
s
/
c
l
e
a
n
u
p
"
)
;


 
 
r
e
t
u
r
n
 
d
a
t
a
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
S
i
g
n
a
l
L
o
g
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
s
o
u
r
c
e
:
 
s
t
r
i
n
g
;


 
 
s
t
a
t
u
s
:
 
s
t
r
i
n
g
;


 
 
s
i
g
n
a
l
s
F
o
u
n
d
:
 
n
u
m
b
e
r
;


 
 
s
i
g
n
a
l
s
C
r
e
a
t
e
d
:
 
n
u
m
b
e
r
;


 
 
s
i
g
n
a
l
s
U
p
d
a
t
e
d
:
 
n
u
m
b
e
r
;


 
 
e
r
r
o
r
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
d
u
r
a
t
i
o
n
:
 
n
u
m
b
e
r
;


 
 
c
r
e
a
t
e
d
A
t
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
 
a
s
y
n
c
 
f
u
n
c
t
i
o
n
 
g
e
t
I
n
g
e
s
t
L
o
g
s
(
)
:
 
P
r
o
m
i
s
e
<
{
 
l
o
g
s
:
 
S
i
g
n
a
l
L
o
g
[
]
 
}
>
 
{


 
 
c
o
n
s
t
 
{
 
d
a
t
a
 
}
 
=
 
a
w
a
i
t
 
a
p
i
.
g
e
t
<
{
 
l
o
g
s
:
 
S
i
g
n
a
l
L
o
g
[
]
 
}
>
(
"
/
s
i
g
n
a
l
s
/
l
o
g
s
"
)
;


 
 
r
e
t
u
r
n
 
d
a
t
a
;


}


