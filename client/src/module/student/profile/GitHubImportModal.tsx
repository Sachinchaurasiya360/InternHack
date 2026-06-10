
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
S
t
a
t
e
 
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
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{
 
X
,
 
G
i
t
h
u
b
,
 
L
o
a
d
e
r
2
,
 
C
h
e
c
k
,
 
A
l
e
r
t
C
i
r
c
l
e
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
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
 
B
u
t
t
o
n
 
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
b
u
t
t
o
n
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
 
P
r
o
j
e
c
t
I
t
e
m
 
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




i
n
t
e
r
f
a
c
e
 
G
i
t
H
u
b
I
m
p
o
r
t
D
a
t
a
 
{


 
 
n
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


 
 
b
i
o
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
c
a
t
i
o
n
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
v
a
t
a
r
:
 
s
t
r
i
n
g
;


 
 
l
a
n
g
u
a
g
e
s
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


 
 
r
e
p
o
s
:
 
{


 
 
 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
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
:
 
s
t
r
i
n
g
;


 
 
 
 
t
e
c
h
S
t
a
c
k
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


 
 
 
 
r
e
p
o
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


 
 
 
 
l
i
v
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


 
 
}
[
]
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
 
G
i
t
H
u
b
I
m
p
o
r
t
M
o
d
a
l
P
r
o
p
s
 
{


 
 
o
p
e
n
:
 
b
o
o
l
e
a
n
;


 
 
o
n
C
l
o
s
e
:
 
(
)
 
=
>
 
v
o
i
d
;


 
 
c
u
r
r
e
n
t
S
k
i
l
l
s
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
u
r
r
e
n
t
P
r
o
j
e
c
t
s
:
 
P
r
o
j
e
c
t
I
t
e
m
[
]
;


 
 
o
n
I
m
p
o
r
t
:
 
(
d
a
t
a
:
 
{


 
 
 
 
s
k
i
l
l
s
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


 
 
 
 
p
r
o
j
e
c
t
s
:
 
P
r
o
j
e
c
t
I
t
e
m
[
]
;


 
 
 
 
b
i
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


 
 
 
 
l
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
;


 
 
 
 
g
i
t
h
u
b
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
;


 
 
}
)
 
=
>
 
v
o
i
d
;


}




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
G
i
t
H
u
b
I
m
p
o
r
t
M
o
d
a
l
(
{


 
 
o
p
e
n
,


 
 
o
n
C
l
o
s
e
,


 
 
c
u
r
r
e
n
t
S
k
i
l
l
s
,


 
 
c
u
r
r
e
n
t
P
r
o
j
e
c
t
s
,


 
 
o
n
I
m
p
o
r
t
,


}
:
 
G
i
t
H
u
b
I
m
p
o
r
t
M
o
d
a
l
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
 
[
u
s
e
r
n
a
m
e
,
 
s
e
t
U
s
e
r
n
a
m
e
]
 
=
 
u
s
e
S
t
a
t
e
(
"
"
)
;


 
 
c
o
n
s
t
 
[
l
o
a
d
i
n
g
,
 
s
e
t
L
o
a
d
i
n
g
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
r
e
s
u
l
t
,
 
s
e
t
R
e
s
u
l
t
]
 
=
 
u
s
e
S
t
a
t
e
<
G
i
t
H
u
b
I
m
p
o
r
t
D
a
t
a
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
[
e
r
r
o
r
,
 
s
e
t
E
r
r
o
r
]
 
=
 
u
s
e
S
t
a
t
e
<
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
>
(
n
u
l
l
)
;




 
 
/
/
 
S
e
l
e
c
t
i
o
n
 
s
t
a
t
e


 
 
c
o
n
s
t
 
[
s
e
l
e
c
t
e
d
S
k
i
l
l
s
,
 
s
e
t
S
e
l
e
c
t
e
d
S
k
i
l
l
s
]
 
=
 
u
s
e
S
t
a
t
e
<
S
e
t
<
s
t
r
i
n
g
>
>
(
n
e
w
 
S
e
t
(
)
)
;


 
 
c
o
n
s
t
 
[
s
e
l
e
c
t
e
d
R
e
p
o
s
,
 
s
e
t
S
e
l
e
c
t
e
d
R
e
p
o
s
]
 
=
 
u
s
e
S
t
a
t
e
<
S
e
t
<
n
u
m
b
e
r
>
>
(
n
e
w
 
S
e
t
(
)
)
;


 
 
c
o
n
s
t
 
[
i
m
p
o
r
t
B
i
o
,
 
s
e
t
I
m
p
o
r
t
B
i
o
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
i
m
p
o
r
t
L
o
c
a
t
i
o
n
,
 
s
e
t
I
m
p
o
r
t
L
o
c
a
t
i
o
n
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;




 
 
c
o
n
s
t
 
l
o
o
k
s
L
i
k
e
U
r
l
 
=
 
(
v
:
 
s
t
r
i
n
g
)
 
=
>
 
/
^
h
t
t
p
s
?
:
\
/
\
/
|
g
i
t
h
u
b
\
.
c
o
m
\
/
/
i
.
t
e
s
t
(
v
.
t
r
i
m
(
)
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
F
e
t
c
h
 
=
 
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
u
s
e
r
n
a
m
e
.
t
r
i
m
(
)
)
 
r
e
t
u
r
n
;


 
 
 
 
i
f
 
(
l
o
o
k
s
L
i
k
e
U
r
l
(
u
s
e
r
n
a
m
e
)
)
 
{


 
 
 
 
 
 
s
e
t
E
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
 
e
n
t
e
r
 
y
o
u
r
 
G
i
t
H
u
b
 
u
s
e
r
n
a
m
e
 
o
n
l
y
,
 
n
o
t
 
t
h
e
 
f
u
l
l
 
U
R
L
 
(
e
.
g
.
 
\
"
o
c
t
o
c
a
t
\
"
)
"
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}


 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
t
r
u
e
)
;


 
 
 
 
s
e
t
E
r
r
o
r
(
n
u
l
l
)
;


 
 
 
 
s
e
t
R
e
s
u
l
t
(
n
u
l
l
)
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
 
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
a
u
t
h
/
i
m
p
o
r
t
-
g
i
t
h
u
b
"
,
 
{
 
u
s
e
r
n
a
m
e
:
 
u
s
e
r
n
a
m
e
.
t
r
i
m
(
)
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
r
a
w
 
=
 
r
e
s
.
d
a
t
a
 
a
s
 
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
 
u
n
k
n
o
w
n
>
;


 
 
 
 
 
 
c
o
n
s
t
 
d
a
t
a
:
 
G
i
t
H
u
b
I
m
p
o
r
t
D
a
t
a
 
=
 
{


 
 
 
 
 
 
 
 
n
a
m
e
:
 
r
a
w
.
n
a
m
e
 
a
s
 
s
t
r
i
n
g
,


 
 
 
 
 
 
 
 
b
i
o
:
 
(
r
a
w
.
b
i
o
 
a
s
 
s
t
r
i
n
g
)
 
?
?
 
n
u
l
l
,


 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
:
 
(
r
a
w
.
l
o
c
a
t
i
o
n
 
a
s
 
s
t
r
i
n
g
)
 
?
?
 
n
u
l
l
,


 
 
 
 
 
 
 
 
a
v
a
t
a
r
:
 
r
a
w
.
a
v
a
t
a
r
 
a
s
 
s
t
r
i
n
g
,


 
 
 
 
 
 
 
 
l
a
n
g
u
a
g
e
s
:
 
(
r
a
w
.
l
a
n
g
u
a
g
e
s
 
a
s
 
s
t
r
i
n
g
[
]
)
 
?
?
 
[
]
,


 
 
 
 
 
 
 
 
r
e
p
o
s
:
 
(
r
a
w
.
r
e
p
o
s
 
?
?
 
r
a
w
.
p
r
o
j
e
c
t
s
 
?
?
 
[
]
)
 
a
s
 
G
i
t
H
u
b
I
m
p
o
r
t
D
a
t
a
[
"
r
e
p
o
s
"
]
,


 
 
 
 
 
 
}
;


 
 
 
 
 
 
s
e
t
R
e
s
u
l
t
(
d
a
t
a
)
;


 
 
 
 
 
 
/
/
 
P
r
e
-
s
e
l
e
c
t
 
n
e
w
 
s
k
i
l
l
s
 
(
n
o
t
 
a
l
r
e
a
d
y
 
i
n
 
p
r
o
f
i
l
e
)


 
 
 
 
 
 
c
o
n
s
t
 
e
x
i
s
t
i
n
g
L
o
w
e
r
 
=
 
n
e
w
 
S
e
t
(
c
u
r
r
e
n
t
S
k
i
l
l
s
.
m
a
p
(
(
s
)
 
=
>
 
s
.
t
o
L
o
w
e
r
C
a
s
e
(
)
)
)
;


 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
S
k
i
l
l
s
 
=
 
d
a
t
a
.
l
a
n
g
u
a
g
e
s
.
f
i
l
t
e
r
(
(
l
)
 
=
>
 
!
e
x
i
s
t
i
n
g
L
o
w
e
r
.
h
a
s
(
l
.
t
o
L
o
w
e
r
C
a
s
e
(
)
)
)
;


 
 
 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
S
k
i
l
l
s
(
n
e
w
 
S
e
t
(
n
e
w
S
k
i
l
l
s
)
)
;


 
 
 
 
 
 
/
/
 
P
r
e
-
s
e
l
e
c
t
 
f
i
r
s
t
 
5
 
r
e
p
o
s


 
 
 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
R
e
p
o
s
(
n
e
w
 
S
e
t
(
d
a
t
a
.
r
e
p
o
s
.
s
l
i
c
e
(
0
,
 
5
)
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
i
)
)
)
;


 
 
 
 
 
 
s
e
t
I
m
p
o
r
t
B
i
o
(
!
!
d
a
t
a
.
b
i
o
)
;


 
 
 
 
 
 
s
e
t
I
m
p
o
r
t
L
o
c
a
t
i
o
n
(
!
!
d
a
t
a
.
l
o
c
a
t
i
o
n
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
m
s
g
 
=
 
(
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
d
a
t
a
?
:
 
{
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
 
}
 
}
 
}
)
?
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
m
e
s
s
a
g
e
 
|
|
 
"
F
a
i
l
e
d
 
t
o
 
f
e
t
c
h
 
G
i
t
H
u
b
 
d
a
t
a
"
;


 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
m
s
g
)
;


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
}


 
 
}
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
I
m
p
o
r
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
r
e
s
u
l
t
)
 
r
e
t
u
r
n
;




 
 
 
 
c
o
n
s
t
 
e
x
i
s
t
i
n
g
L
o
w
e
r
 
=
 
n
e
w
 
S
e
t
(
c
u
r
r
e
n
t
S
k
i
l
l
s
.
m
a
p
(
(
s
)
 
=
>
 
s
.
t
o
L
o
w
e
r
C
a
s
e
(
)
)
)
;


 
 
 
 
c
o
n
s
t
 
n
e
w
S
k
i
l
l
s
 
=
 
[
.
.
.
s
e
l
e
c
t
e
d
S
k
i
l
l
s
]
.
f
i
l
t
e
r
(
(
s
)
 
=
>
 
!
e
x
i
s
t
i
n
g
L
o
w
e
r
.
h
a
s
(
s
.
t
o
L
o
w
e
r
C
a
s
e
(
)
)
)
;


 
 
 
 
c
o
n
s
t
 
m
e
r
g
e
d
S
k
i
l
l
s
 
=
 
[
.
.
.
c
u
r
r
e
n
t
S
k
i
l
l
s
,
 
.
.
.
n
e
w
S
k
i
l
l
s
]
.
s
l
i
c
e
(
0
,
 
2
0
)
;




 
 
 
 
c
o
n
s
t
 
e
x
i
s
t
i
n
g
T
i
t
l
e
s
 
=
 
n
e
w
 
S
e
t
(
c
u
r
r
e
n
t
P
r
o
j
e
c
t
s
.
m
a
p
(
(
p
)
 
=
>
 
p
.
t
i
t
l
e
.
t
o
L
o
w
e
r
C
a
s
e
(
)
)
)
;


 
 
 
 
c
o
n
s
t
 
n
e
w
P
r
o
j
e
c
t
s
:
 
P
r
o
j
e
c
t
I
t
e
m
[
]
 
=
 
r
e
s
u
l
t
.
r
e
p
o
s


 
 
 
 
 
 
.
f
i
l
t
e
r
(
(
_
,
 
i
)
 
=
>
 
s
e
l
e
c
t
e
d
R
e
p
o
s
.
h
a
s
(
i
)
)


 
 
 
 
 
 
.
f
i
l
t
e
r
(
(
r
)
 
=
>
 
!
e
x
i
s
t
i
n
g
T
i
t
l
e
s
.
h
a
s
(
r
.
t
i
t
l
e
.
t
o
L
o
w
e
r
C
a
s
e
(
)
)
)


 
 
 
 
 
 
.
m
a
p
(
(
r
)
 
=
>
 
(
{


 
 
 
 
 
 
 
 
i
d
:
 
c
r
y
p
t
o
.
r
a
n
d
o
m
U
U
I
D
(
)
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
r
.
t
i
t
l
e
,


 
 
 
 
 
 
 
 
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
:
 
r
.
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
,


 
 
 
 
 
 
 
 
t
e
c
h
S
t
a
c
k
:
 
r
.
t
e
c
h
S
t
a
c
k
,


 
 
 
 
 
 
 
 
r
e
p
o
U
r
l
:
 
r
.
r
e
p
o
U
r
l
,


 
 
 
 
 
 
 
 
l
i
v
e
U
r
l
:
 
r
.
l
i
v
e
U
r
l
,


 
 
 
 
 
 
}
)
)
;


 
 
 
 
c
o
n
s
t
 
m
e
r
g
e
d
P
r
o
j
e
c
t
s
 
=
 
[
.
.
.
c
u
r
r
e
n
t
P
r
o
j
e
c
t
s
,
 
.
.
.
n
e
w
P
r
o
j
e
c
t
s
]
.
s
l
i
c
e
(
0
,
 
1
0
)
;




 
 
 
 
o
n
I
m
p
o
r
t
(
{


 
 
 
 
 
 
s
k
i
l
l
s
:
 
m
e
r
g
e
d
S
k
i
l
l
s
,


 
 
 
 
 
 
p
r
o
j
e
c
t
s
:
 
m
e
r
g
e
d
P
r
o
j
e
c
t
s
,


 
 
 
 
 
 
.
.
.
(
i
m
p
o
r
t
B
i
o
 
&
&
 
r
e
s
u
l
t
.
b
i
o
 
?
 
{
 
b
i
o
:
 
r
e
s
u
l
t
.
b
i
o
 
}
 
:
 
{
}
)
,


 
 
 
 
 
 
.
.
.
(
i
m
p
o
r
t
L
o
c
a
t
i
o
n
 
&
&
 
r
e
s
u
l
t
.
l
o
c
a
t
i
o
n
 
?
 
{
 
l
o
c
a
t
i
o
n
:
 
r
e
s
u
l
t
.
l
o
c
a
t
i
o
n
 
}
 
:
 
{
}
)
,


 
 
 
 
 
 
g
i
t
h
u
b
U
r
l
:
 
`
h
t
t
p
s
:
/
/
g
i
t
h
u
b
.
c
o
m
/
$
{
u
s
e
r
n
a
m
e
.
t
r
i
m
(
)
}
`
,


 
 
 
 
}
)
;




 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
`
I
m
p
o
r
t
e
d
 
$
{
n
e
w
S
k
i
l
l
s
.
l
e
n
g
t
h
}
 
s
k
i
l
l
s
 
a
n
d
 
$
{
n
e
w
P
r
o
j
e
c
t
s
.
l
e
n
g
t
h
}
 
p
r
o
j
e
c
t
s
`
)
;


 
 
 
 
h
a
n
d
l
e
C
l
o
s
e
(
)
;


 
 
}
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
C
l
o
s
e
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
U
s
e
r
n
a
m
e
(
"
"
)
;


 
 
 
 
s
e
t
R
e
s
u
l
t
(
n
u
l
l
)
;


 
 
 
 
s
e
t
E
r
r
o
r
(
n
u
l
l
)
;


 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
S
k
i
l
l
s
(
n
e
w
 
S
e
t
(
)
)
;


 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
R
e
p
o
s
(
n
e
w
 
S
e
t
(
)
)
;


 
 
 
 
o
n
C
l
o
s
e
(
)
;


 
 
}
;




 
 
c
o
n
s
t
 
t
o
g
g
l
e
S
k
i
l
l
 
=
 
(
s
k
i
l
l
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
S
k
i
l
l
s
(
(
p
r
e
v
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
n
e
x
t
 
=
 
n
e
w
 
S
e
t
(
p
r
e
v
)
;


 
 
 
 
 
 
i
f
 
(
n
e
x
t
.
h
a
s
(
s
k
i
l
l
)
)
 
n
e
x
t
.
d
e
l
e
t
e
(
s
k
i
l
l
)
;


 
 
 
 
 
 
e
l
s
e
 
n
e
x
t
.
a
d
d
(
s
k
i
l
l
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
x
t
;


 
 
 
 
}
)
;


 
 
}
;




 
 
c
o
n
s
t
 
t
o
g
g
l
e
R
e
p
o
 
=
 
(
i
n
d
e
x
:
 
n
u
m
b
e
r
)
 
=
>
 
{


 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
R
e
p
o
s
(
(
p
r
e
v
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
n
e
x
t
 
=
 
n
e
w
 
S
e
t
(
p
r
e
v
)
;


 
 
 
 
 
 
i
f
 
(
n
e
x
t
.
h
a
s
(
i
n
d
e
x
)
)
 
n
e
x
t
.
d
e
l
e
t
e
(
i
n
d
e
x
)
;


 
 
 
 
 
 
e
l
s
e
 
n
e
x
t
.
a
d
d
(
i
n
d
e
x
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
x
t
;


 
 
 
 
}
)
;


 
 
}
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
{
o
p
e
n
 
&
&
 
(


 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
0
.
4
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
i
x
e
d
 
i
n
s
e
t
-
0
 
b
g
-
b
l
a
c
k
 
z
-
4
0
"


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
C
l
o
s
e
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
s
c
a
l
e
:
 
0
.
9
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
s
c
a
l
e
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
s
c
a
l
e
:
 
0
.
9
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
i
x
e
d
 
i
n
s
e
t
-
0
 
z
-
5
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
p
-
4
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
s
h
a
d
o
w
-
x
l
 
w
-
f
u
l
l
 
m
a
x
-
w
-
l
g
 
m
a
x
-
h
-
[
8
5
v
h
]
 
f
l
e
x
 
f
l
e
x
-
c
o
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
p
-
6
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
g
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
i
t
h
u
b
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
I
m
p
o
r
t
 
f
r
o
m
 
G
i
t
H
u
b


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
d
e
=
"
i
c
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
C
l
o
s
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
g
r
a
y
-
5
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
o
v
e
r
f
l
o
w
-
y
-
a
u
t
o
 
p
-
6
 
s
p
a
c
e
-
y
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
U
s
e
r
n
a
m
e
 
I
n
p
u
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
r
e
s
u
l
t
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
n
t
e
r
 
y
o
u
r
 
G
i
t
H
u
b
 
u
s
e
r
n
a
m
e
 
t
o
 
i
m
p
o
r
t
 
l
a
n
g
u
a
g
e
s
,
 
r
e
p
o
s
,
 
a
n
d
 
p
r
o
f
i
l
e
 
d
a
t
a
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
u
s
e
r
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
U
s
e
r
n
a
m
e
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
K
e
y
D
o
w
n
=
{
(
e
)
 
=
>
 
{
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
E
n
t
e
r
"
)
 
h
a
n
d
l
e
F
e
t
c
h
(
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
g
i
t
h
u
b
-
u
s
e
r
n
a
m
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
p
x
-
4
 
p
y
-
2
.
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
u
t
o
F
o
c
u
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
m
o
n
o
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
F
e
t
c
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
l
o
a
d
i
n
g
 
|
|
 
!
u
s
e
r
n
a
m
e
.
t
r
i
m
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
 
?
 
<
L
o
a
d
e
r
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>
 
:
 
<
G
i
t
h
u
b
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
F
e
t
c
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
r
r
o
r
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
s
m
 
t
e
x
t
-
r
e
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
l
e
r
t
C
i
r
c
l
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
r
r
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
e
s
u
l
t
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
r
o
f
i
l
e
 
i
n
f
o
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
r
e
s
u
l
t
.
b
i
o
 
|
|
 
r
e
s
u
l
t
.
l
o
c
a
t
i
o
n
)
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
>
P
r
o
f
i
l
e
 
I
n
f
o
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
.
b
i
o
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
2
 
t
e
x
t
-
s
m
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
c
h
e
c
k
b
o
x
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
h
e
c
k
e
d
=
{
i
m
p
o
r
t
B
i
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
)
 
=
>
 
s
e
t
I
m
p
o
r
t
B
i
o
(
!
i
m
p
o
r
t
B
i
o
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
0
.
5
 
r
o
u
n
d
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
i
o
:
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
>
{
r
e
s
u
l
t
.
b
i
o
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
.
l
o
c
a
t
i
o
n
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
2
 
t
e
x
t
-
s
m
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
c
h
e
c
k
b
o
x
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
h
e
c
k
e
d
=
{
i
m
p
o
r
t
L
o
c
a
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
)
 
=
>
 
s
e
t
I
m
p
o
r
t
L
o
c
a
t
i
o
n
(
!
i
m
p
o
r
t
L
o
c
a
t
i
o
n
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
0
.
5
 
r
o
u
n
d
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
L
o
c
a
t
i
o
n
:
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
>
{
r
e
s
u
l
t
.
l
o
c
a
t
i
o
n
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
L
a
n
g
u
a
g
e
s
 
a
s
 
s
k
i
l
l
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
.
l
a
n
g
u
a
g
e
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
L
a
n
g
u
a
g
e
s
 
(
{
s
e
l
e
c
t
e
d
S
k
i
l
l
s
.
s
i
z
e
}
 
s
e
l
e
c
t
e
d
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
.
l
a
n
g
u
a
g
e
s
.
m
a
p
(
(
l
a
n
g
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
E
x
i
s
t
i
n
g
 
=
 
c
u
r
r
e
n
t
S
k
i
l
l
s
.
s
o
m
e
(
(
s
)
 
=
>
 
s
.
t
o
L
o
w
e
r
C
a
s
e
(
)
 
=
=
=
 
l
a
n
g
.
t
o
L
o
w
e
r
C
a
s
e
(
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
S
e
l
e
c
t
e
d
 
=
 
s
e
l
e
c
t
e
d
S
k
i
l
l
s
.
h
a
s
(
l
a
n
g
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
l
a
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
{
i
s
S
e
l
e
c
t
e
d
 
?
 
"
m
o
n
o
"
 
:
 
"
o
u
t
l
i
n
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
!
i
s
E
x
i
s
t
i
n
g
 
&
&
 
t
o
g
g
l
e
S
k
i
l
l
(
l
a
n
g
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
i
s
E
x
i
s
t
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
E
x
i
s
t
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
6
0
0
 
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
i
s
S
e
l
e
c
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
i
n
d
i
g
o
-
1
0
0
 
d
a
r
k
:
b
g
-
i
n
d
i
g
o
-
9
0
0
/
3
0
 
t
e
x
t
-
i
n
d
i
g
o
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
i
n
d
i
g
o
-
4
0
0
 
r
i
n
g
-
1
 
r
i
n
g
-
i
n
d
i
g
o
-
3
0
0
 
d
a
r
k
:
r
i
n
g
-
i
n
d
i
g
o
-
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
E
x
i
s
t
i
n
g
 
&
&
 
<
C
h
e
c
k
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
 
i
n
l
i
n
e
 
m
r
-
1
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
a
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
e
p
o
s
 
a
s
 
p
r
o
j
e
c
t
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
.
r
e
p
o
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
p
o
s
i
t
o
r
i
e
s
 
(
{
s
e
l
e
c
t
e
d
R
e
p
o
s
.
s
i
z
e
}
 
s
e
l
e
c
t
e
d
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
2
 
m
a
x
-
h
-
4
8
 
o
v
e
r
f
l
o
w
-
y
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
.
r
e
p
o
s
.
m
a
p
(
(
r
e
p
o
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
S
e
l
e
c
t
e
d
 
=
 
s
e
l
e
c
t
e
d
R
e
p
o
s
.
h
a
s
(
i
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
t
o
g
g
l
e
R
e
p
o
(
i
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
f
u
l
l
 
t
e
x
t
-
l
e
f
t
 
p
x
-
4
 
p
y
-
3
 
r
o
u
n
d
e
d
-
x
l
 
b
o
r
d
e
r
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
S
e
l
e
c
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
i
n
d
i
g
o
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
i
n
d
i
g
o
-
7
0
0
 
b
g
-
i
n
d
i
g
o
-
5
0
 
d
a
r
k
:
b
g
-
i
n
d
i
g
o
-
9
0
0
/
2
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
t
r
u
n
c
a
t
e
"
>
{
r
e
p
o
.
t
i
t
l
e
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
S
e
l
e
c
t
e
d
 
&
&
 
<
C
h
e
c
k
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
t
e
x
t
-
i
n
d
i
g
o
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
i
n
d
i
g
o
-
4
0
0
 
s
h
r
i
n
k
-
0
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
p
o
.
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
m
t
-
0
.
5
 
l
i
n
e
-
c
l
a
m
p
-
1
"
>
{
r
e
p
o
.
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
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
p
o
.
t
e
c
h
S
t
a
c
k
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
 
m
t
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
p
o
.
t
e
c
h
S
t
a
c
k
.
m
a
p
(
(
t
,
 
j
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
k
e
y
=
{
j
}
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
1
.
5
 
p
y
-
0
.
5
 
t
e
x
t
-
[
1
0
p
x
]
 
b
g
-
a
m
b
e
r
-
5
0
 
d
a
r
k
:
b
g
-
a
m
b
e
r
-
9
0
0
/
2
0
 
t
e
x
t
-
a
m
b
e
r
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
a
m
b
e
r
-
4
0
0
 
r
o
u
n
d
e
d
"
>
{
t
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
F
o
o
t
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
s
u
l
t
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
i
t
e
m
s
-
c
e
n
t
e
r
 
p
-
6
 
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
{
 
s
e
t
R
e
s
u
l
t
(
n
u
l
l
)
;
 
s
e
t
E
r
r
o
r
(
n
u
l
l
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
g
r
a
y
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
a
c
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
m
o
n
o
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
I
m
p
o
r
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
s
e
l
e
c
t
e
d
S
k
i
l
l
s
.
s
i
z
e
 
=
=
=
 
0
 
&
&
 
s
e
l
e
c
t
e
d
R
e
p
o
s
.
s
i
z
e
 
=
=
=
 
0
 
&
&
 
!
i
m
p
o
r
t
B
i
o
 
&
&
 
!
i
m
p
o
r
t
L
o
c
a
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
I
m
p
o
r
t
 
S
e
l
e
c
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
)
;


}


