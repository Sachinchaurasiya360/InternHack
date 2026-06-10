
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
M
e
m
o
,
 
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
 
B
o
o
k
O
p
e
n
,
 
C
o
d
e
2
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
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
 
{


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
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
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
{


 
 
A
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
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
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
"
;


i
m
p
o
r
t
 
{


 
 
C
a
l
l
o
u
t
,


 
 
C
a
r
d
,


 
 
L
e
d
e
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
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
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
e
s
"
;


i
m
p
o
r
t
 
{
 
P
r
a
c
t
i
c
e
T
a
b
 
}
 
f
r
o
m
 
"
.
.
/
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
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
 
=
 
"
g
r
a
p
h
"
;




/
*
 
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
-
-
-
-
-
-
 
*
/


/
*
 
 
P
a
r
s
e
 
w
e
i
g
h
t
e
d
 
u
n
d
i
r
e
c
t
e
d
 
e
d
g
e
s
 
 
A
-
B
:
5
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
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
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
p
a
r
s
e
W
e
i
g
h
t
e
d
(
i
n
p
u
t
:
 
s
t
r
i
n
g
)
:
 
{
 
i
d
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
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
;
 
w
:
 
n
u
m
b
e
r
 
}
[
]
 
}
 
|
 
n
u
l
l
 
{


 
 
c
o
n
s
t
 
t
o
k
e
n
s
 
=
 
i
n
p
u
t
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
(
t
)
 
=
>
 
t
.
t
r
i
m
(
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
B
o
o
l
e
a
n
)
;


 
 
i
f
 
(
t
o
k
e
n
s
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
c
o
n
s
t
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
;
 
w
:
 
n
u
m
b
e
r
 
}
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
i
d
S
e
t
 
=
 
n
e
w
 
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
(
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
t
o
k
 
o
f
 
t
o
k
e
n
s
)
 
{


 
 
 
 
c
o
n
s
t
 
m
 
=
 
t
o
k
.
m
a
t
c
h
(
/
^
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
[
-
:
]
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
:
(
-
?
\
d
+
)
$
/
)
;


 
 
 
 
i
f
 
(
!
m
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
c
o
n
s
t
 
w
e
i
g
h
t
 
=
 
N
u
m
b
e
r
(
m
[
3
]
)
;


 
 
 
 
i
f
 
(
w
e
i
g
h
t
 
<
 
0
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
e
d
g
e
s
.
p
u
s
h
(
{
 
f
r
o
m
:
 
m
[
1
]
,
 
t
o
:
 
m
[
2
]
,
 
w
:
 
w
e
i
g
h
t
 
}
)
;


 
 
 
 
i
d
S
e
t
.
a
d
d
(
m
[
1
]
)
;


 
 
 
 
i
d
S
e
t
.
a
d
d
(
m
[
2
]
)
;


 
 
}


 
 
r
e
t
u
r
n
 
{
 
i
d
s
:
 
[
.
.
.
i
d
S
e
t
]
.
s
o
r
t
(
)
,
 
e
d
g
e
s
 
}
;


}




f
u
n
c
t
i
o
n
 
a
u
t
o
L
a
y
o
u
t
(
i
d
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
,
 
c
x
 
=
 
3
0
0
,
 
c
y
 
=
 
1
5
0
,
 
r
 
=
 
1
1
0
)
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
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
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
 
o
u
t
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
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
 
=
 
{
}
;


 
 
c
o
n
s
t
 
n
 
=
 
i
d
s
.
l
e
n
g
t
h
;


 
 
i
d
s
.
f
o
r
E
a
c
h
(
(
i
d
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
 
a
n
g
 
=
 
(
2
 
*
 
M
a
t
h
.
P
I
 
*
 
i
)
 
/
 
M
a
t
h
.
m
a
x
(
1
,
 
n
)
 
-
 
M
a
t
h
.
P
I
 
/
 
2
;


 
 
 
 
o
u
t
[
i
d
]
 
=
 
{
 
x
:
 
c
x
 
+
 
r
 
*
 
M
a
t
h
.
c
o
s
(
a
n
g
)
,
 
y
:
 
c
y
 
+
 
r
 
*
 
M
a
t
h
.
s
i
n
(
a
n
g
)
 
}
;


 
 
}
)
;


 
 
r
e
t
u
r
n
 
o
u
t
;


}




/
*
 
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
-
-
-
-
-
-
 
*
/


/
*
 
 
D
i
j
k
s
t
r
a
 
F
r
a
m
e
 
b
u
i
l
d
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
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
-
-
-
-
-
-
 
*
/




t
y
p
e
 
N
o
d
e
S
t
a
t
e
 
=
 
"
d
e
f
a
u
l
t
"
 
|
 
"
f
r
o
n
t
i
e
r
"
 
|
 
"
d
o
n
e
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
 
D
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
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
 
u
n
d
e
f
i
n
e
d
>
;


 
 
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


 
 
d
i
s
t
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
 
n
u
m
b
e
r
 
|
 
u
n
d
e
f
i
n
e
d
>
;


 
 
n
o
d
e
S
t
a
t
e
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
 
N
o
d
e
S
t
a
t
e
>
;


 
 
r
e
l
a
x
E
d
g
e
s
:
 
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
;


 
 
p
q
:
 
{
 
i
d
:
 
s
t
r
i
n
g
;
 
d
:
 
n
u
m
b
e
r
 
}
[
]
;


 
 
f
l
a
s
h
K
e
y
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




c
o
n
s
t
 
P
S
E
U
D
O
 
=
 
[


 
 
"
D
i
j
k
s
t
r
a
(
G
,
 
s
)
:
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
v
:
 
d
i
s
t
[
v
]
 
←
 
∞
"
,


 
 
"
 
 
d
i
s
t
[
s
]
 
←
 
0
"
,


 
 
"
 
 
P
Q
 
←
 
{
(
s
,
 
0
)
}
"
,


 
 
"
 
 
w
h
i
l
e
 
P
Q
 
n
o
t
 
e
m
p
t
y
:
"
,


 
 
"
 
 
 
 
u
 
←
 
e
x
t
r
a
c
t
-
m
i
n
(
P
Q
)
"
,


 
 
"
 
 
 
 
i
f
 
u
 
a
l
r
e
a
d
y
 
f
i
n
a
l
i
z
e
d
:
 
s
k
i
p
"
,


 
 
"
 
 
 
 
m
a
r
k
 
u
 
f
i
n
a
l
i
z
e
d
"
,


 
 
"
 
 
 
 
f
o
r
 
e
a
c
h
 
(
v
,
 
w
)
 
i
n
 
a
d
j
[
u
]
:
"
,


 
 
"
 
 
 
 
 
 
i
f
 
d
i
s
t
[
u
]
 
+
 
w
 
<
 
d
i
s
t
[
v
]
:
"
,


 
 
"
 
 
 
 
 
 
 
 
d
i
s
t
[
v
]
 
←
 
d
i
s
t
[
u
]
 
+
 
w
"
,


 
 
"
 
 
 
 
 
 
 
 
p
a
r
e
n
t
[
v
]
 
←
 
u
"
,


 
 
"
 
 
 
 
 
 
 
 
i
n
s
e
r
t
 
(
v
,
 
d
i
s
t
[
v
]
)
 
i
n
t
o
 
P
Q
"
,


]
;




f
u
n
c
t
i
o
n
 
b
u
i
l
d
D
i
j
k
s
t
r
a
F
r
a
m
e
s
(


 
 
i
d
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
,


 
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
;
 
w
:
 
n
u
m
b
e
r
 
}
[
]
,


 
 
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
,


)
:
 
D
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
:
 
D
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
i
f
 
(
!
i
d
s
.
i
n
c
l
u
d
e
s
(
s
o
u
r
c
e
)
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
}
,
 
m
e
s
s
a
g
e
:
 
`
S
o
u
r
c
e
 
'
$
{
s
o
u
r
c
e
}
'
 
n
o
t
 
i
n
 
g
r
a
p
h
`
,
 
d
i
s
t
:
 
{
}
,
 
n
o
d
e
S
t
a
t
e
s
:
 
{
}
,
 
r
e
l
a
x
E
d
g
e
s
:
 
n
e
w
 
S
e
t
(
)
,
 
p
q
:
 
[
]
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
f
;


 
 
}




 
 
c
o
n
s
t
 
a
d
j
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
;
 
w
:
 
n
u
m
b
e
r
 
}
[
]
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
[
]
]
)
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
e
 
o
f
 
e
d
g
e
s
)
 
{
 
a
d
j
[
e
.
f
r
o
m
]
.
p
u
s
h
(
{
 
t
o
:
 
e
.
t
o
,
 
w
:
 
e
.
w
 
}
)
;
 
a
d
j
[
e
.
t
o
]
.
p
u
s
h
(
{
 
t
o
:
 
e
.
f
r
o
m
,
 
w
:
 
e
.
w
 
}
)
;
 
}




 
 
c
o
n
s
t
 
d
i
s
t
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
 
n
u
m
b
e
r
 
|
 
u
n
d
e
f
i
n
e
d
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
u
n
d
e
f
i
n
e
d
]
)
)
;


 
 
c
o
n
s
t
 
d
o
n
e
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
}
;


 
 
c
o
n
s
t
 
s
t
a
t
e
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
 
N
o
d
e
S
t
a
t
e
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
"
d
e
f
a
u
l
t
"
]
)
)
;


 
 
c
o
n
s
t
 
r
e
l
a
x
E
d
g
e
s
 
=
 
n
e
w
 
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
(
)
;


 
 
c
o
n
s
t
 
p
q
:
 
{
 
i
d
:
 
s
t
r
i
n
g
;
 
d
:
 
n
u
m
b
e
r
 
}
[
]
 
=
 
[
]
;




 
 
c
o
n
s
t
 
c
l
o
n
e
 
=
 
(
p
a
t
c
h
:
 
P
a
r
t
i
a
l
<
D
F
r
a
m
e
>
)
:
 
D
F
r
a
m
e
 
=
>
 
(
{


 
 
 
 
l
i
n
e
:
 
p
a
t
c
h
.
l
i
n
e
 
?
?
 
0
,


 
 
 
 
v
a
r
s
:
 
p
a
t
c
h
.
v
a
r
s
 
?
?
 
{
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
p
a
t
c
h
.
m
e
s
s
a
g
e
 
?
?
 
"
"
,


 
 
 
 
d
i
s
t
:
 
{
 
.
.
.
d
i
s
t
 
}
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
.
.
.
s
t
a
t
e
 
}
,


 
 
 
 
r
e
l
a
x
E
d
g
e
s
:
 
n
e
w
 
S
e
t
(
r
e
l
a
x
E
d
g
e
s
)
,


 
 
 
 
p
q
:
 
[
.
.
.
p
q
]
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
a
.
d
 
-
 
b
.
d
)
,


 
 
 
 
f
l
a
s
h
K
e
y
:
 
p
a
t
c
h
.
f
l
a
s
h
K
e
y
,


 
 
}
)
;




 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
1
,
 
m
e
s
s
a
g
e
:
 
"
I
n
i
t
i
a
l
i
z
e
 
d
i
s
t
[
v
]
 
=
 
∞
 
f
o
r
 
a
l
l
 
v
.
"
 
}
)
)
;




 
 
d
i
s
t
[
s
o
u
r
c
e
]
 
=
 
0
;


 
 
p
q
.
p
u
s
h
(
{
 
i
d
:
 
s
o
u
r
c
e
,
 
d
:
 
0
 
}
)
;


 
 
s
t
a
t
e
[
s
o
u
r
c
e
]
 
=
 
"
f
r
o
n
t
i
e
r
"
;


 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
2
,
 
m
e
s
s
a
g
e
:
 
`
d
i
s
t
[
$
{
s
o
u
r
c
e
}
]
 
=
 
0
.
 
P
u
s
h
 
i
n
t
o
 
P
Q
.
`
,
 
f
l
a
s
h
K
e
y
:
 
s
o
u
r
c
e
,
 
v
a
r
s
:
 
{
 
s
o
u
r
c
e
 
}
 
}
)
)
;




 
 
w
h
i
l
e
 
(
p
q
.
l
e
n
g
t
h
)
 
{


 
 
 
 
p
q
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
a
.
d
 
-
 
b
.
d
)
;


 
 
 
 
c
o
n
s
t
 
{
 
i
d
:
 
u
,
 
d
:
 
d
u
 
}
 
=
 
p
q
.
s
h
i
f
t
(
)
!
;


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
5
,
 
m
e
s
s
a
g
e
:
 
`
E
x
t
r
a
c
t
-
m
i
n
:
 
u
 
=
 
$
{
u
}
,
 
d
 
=
 
$
{
d
u
}
.
`
,
 
v
a
r
s
:
 
{
 
u
,
 
"
d
[
u
]
"
:
 
d
u
 
}
 
}
)
)
;


 
 
 
 
i
f
 
(
d
o
n
e
[
u
]
)
 
{


 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
6
,
 
m
e
s
s
a
g
e
:
 
`
$
{
u
}
 
a
l
r
e
a
d
y
 
f
i
n
a
l
i
z
e
d
,
 
s
k
i
p
.
`
,
 
v
a
r
s
:
 
{
 
u
 
}
 
}
)
)
;


 
 
 
 
 
 
c
o
n
t
i
n
u
e
;


 
 
 
 
}


 
 
 
 
d
o
n
e
[
u
]
 
=
 
t
r
u
e
;


 
 
 
 
s
t
a
t
e
[
u
]
 
=
 
"
d
o
n
e
"
;


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
7
,
 
m
e
s
s
a
g
e
:
 
`
F
i
n
a
l
i
z
e
 
$
{
u
}
.
 
d
i
s
t
[
$
{
u
}
]
 
=
 
$
{
d
i
s
t
[
u
]
}
.
`
,
 
v
a
r
s
:
 
{
 
u
,
 
"
d
i
s
t
[
u
]
"
:
 
d
i
s
t
[
u
]
 
}
,
 
f
l
a
s
h
K
e
y
:
 
u
 
}
)
)
;




 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
{
 
t
o
:
 
v
,
 
w
 
}
 
o
f
 
a
d
j
[
u
]
)
 
{


 
 
 
 
 
 
i
f
 
(
d
o
n
e
[
v
]
)
 
c
o
n
t
i
n
u
e
;


 
 
 
 
 
 
c
o
n
s
t
 
a
l
t
 
=
 
(
d
i
s
t
[
u
]
 
?
?
 
I
n
f
i
n
i
t
y
)
 
+
 
w
;


 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
8
,
 
m
e
s
s
a
g
e
:
 
`
R
e
l
a
x
 
e
d
g
e
 
$
{
u
}
→
$
{
v
}
 
(
w
=
$
{
w
}
)
.
 
C
o
m
p
a
r
e
 
$
{
d
i
s
t
[
u
]
}
 
+
 
$
{
w
}
 
=
 
$
{
a
l
t
}
 
v
s
 
d
i
s
t
[
$
{
v
}
]
 
=
 
$
{
d
i
s
t
[
v
]
 
?
?
 
"
∞
"
}
.
`
,
 
v
a
r
s
:
 
{
 
u
,
 
v
,
 
w
,
 
a
l
t
,
 
"
d
i
s
t
[
v
]
"
:
 
d
i
s
t
[
v
]
 
?
?
 
"
∞
"
 
}
 
}
)
)
;


 
 
 
 
 
 
i
f
 
(
a
l
t
 
<
 
(
d
i
s
t
[
v
]
 
?
?
 
I
n
f
i
n
i
t
y
)
)
 
{


 
 
 
 
 
 
 
 
d
i
s
t
[
v
]
 
=
 
a
l
t
;


 
 
 
 
 
 
 
 
i
f
 
(
s
t
a
t
e
[
v
]
 
!
=
=
 
"
d
o
n
e
"
)
 
s
t
a
t
e
[
v
]
 
=
 
"
f
r
o
n
t
i
e
r
"
;


 
 
 
 
 
 
 
 
r
e
l
a
x
E
d
g
e
s
.
a
d
d
(
`
$
{
u
}
-
$
{
v
}
`
)
;


 
 
 
 
 
 
 
 
r
e
l
a
x
E
d
g
e
s
.
a
d
d
(
`
$
{
v
}
-
$
{
u
}
`
)
;


 
 
 
 
 
 
 
 
p
q
.
p
u
s
h
(
{
 
i
d
:
 
v
,
 
d
:
 
a
l
t
 
}
)
;


 
 
 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
1
0
,
 
m
e
s
s
a
g
e
:
 
`
S
h
o
r
t
e
r
,
 
d
i
s
t
[
$
{
v
}
]
 
=
 
$
{
a
l
t
}
.
 
P
u
s
h
 
i
n
t
o
 
P
Q
.
`
,
 
f
l
a
s
h
K
e
y
:
 
v
,
 
v
a
r
s
:
 
{
 
u
,
 
v
,
 
"
d
i
s
t
[
v
]
"
:
 
a
l
t
 
}
 
}
)
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
8
,
 
m
e
s
s
a
g
e
:
 
`
N
o
t
 
s
h
o
r
t
e
r
,
 
k
e
e
p
 
d
i
s
t
[
$
{
v
}
]
 
=
 
$
{
d
i
s
t
[
v
]
}
.
`
,
 
v
a
r
s
:
 
{
 
u
,
 
v
,
 
"
d
i
s
t
[
v
]
"
:
 
d
i
s
t
[
v
]
 
}
 
}
)
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}




 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
4
,
 
m
e
s
s
a
g
e
:
 
"
P
Q
 
e
m
p
t
y
,
 
D
i
j
k
s
t
r
a
 
c
o
m
p
l
e
t
e
.
 
A
l
l
 
r
e
a
c
h
a
b
l
e
 
d
i
s
t
a
n
c
e
s
 
f
i
n
a
l
i
z
e
d
.
"
 
}
)
)
;


 
 
r
e
t
u
r
n
 
f
;


}




/
*
 
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
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
l
i
n
e
 
g
r
a
p
h
 
S
V
G
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
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
-
-
-
-
-
-
 
*
/




c
o
n
s
t
 
N
O
D
E
_
S
T
A
T
E
_
C
O
L
O
R
:
 
R
e
c
o
r
d
<
N
o
d
e
S
t
a
t
e
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
d
e
f
a
u
l
t
:
 
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
,


 
 
f
r
o
n
t
i
e
r
:
 
"
#
0
6
b
6
d
4
"
,


 
 
d
o
n
e
:
 
"
#
1
0
b
9
8
1
"
,


}
;




f
u
n
c
t
i
o
n
 
G
r
a
p
h
S
V
G
(
{


 
 
i
d
s
,


 
 
e
d
g
e
s
,


 
 
p
o
s
,


 
 
f
r
a
m
e
,


}
:
 
{


 
 
i
d
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


 
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
;
 
w
:
 
n
u
m
b
e
r
 
}
[
]
;


 
 
p
o
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
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
;


 
 
f
r
a
m
e
:
 
D
F
r
a
m
e
;


}
)
 
{


 
 
c
o
n
s
t
 
W
 
=
 
6
0
0
;


 
 
c
o
n
s
t
 
H
 
=
 
3
0
0
;


 
 
r
e
t
u
r
n
 
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
w
-
f
u
l
l
 
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
 
r
o
u
n
d
e
d
-
m
d
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
5
0
"
>


 
 
 
 
 
 
<
s
v
g
 
w
i
d
t
h
=
{
W
}
 
h
e
i
g
h
t
=
{
H
}
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
W
}
 
$
{
H
}
`
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
b
l
o
c
k
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
{
e
d
g
e
s
.
m
a
p
(
(
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
1
 
=
 
p
o
s
[
e
.
f
r
o
m
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
2
 
=
 
p
o
s
[
e
.
t
o
]
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
1
 
|
|
 
!
p
2
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
R
e
l
a
x
 
=
 
f
r
a
m
e
.
r
e
l
a
x
E
d
g
e
s
.
h
a
s
(
`
$
{
e
.
f
r
o
m
}
-
$
{
e
.
t
o
}
`
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
x
 
=
 
(
p
1
.
x
 
+
 
p
2
.
x
)
 
/
 
2
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
y
 
=
 
(
p
1
.
y
 
+
 
p
2
.
y
)
 
/
 
2
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
`
$
{
e
.
f
r
o
m
}
-
$
{
e
.
t
o
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
p
1
.
x
}
 
y
1
=
{
p
1
.
y
}
 
x
2
=
{
p
2
.
x
}
 
y
2
=
{
p
2
.
y
}
 
s
t
r
o
k
e
=
{
i
s
R
e
l
a
x
 
?
 
"
#
f
b
b
f
2
4
"
 
:
 
T
H
E
M
E
.
b
o
r
d
e
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
i
s
R
e
l
a
x
 
?
 
2
.
5
 
:
 
1
.
5
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
m
x
}
 
y
=
{
m
y
 
-
 
5
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
S
i
z
e
=
"
1
0
"
 
f
i
l
l
=
{
T
H
E
M
E
.
a
c
c
e
n
t
}
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}
>
{
e
.
w
}
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
 
=
 
p
o
s
[
i
d
]
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
s
 
=
 
f
r
a
m
e
.
n
o
d
e
S
t
a
t
e
s
[
i
d
]
 
?
?
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
i
l
l
 
=
 
N
O
D
E
_
S
T
A
T
E
_
C
O
L
O
R
[
n
s
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
 
=
 
f
r
a
m
e
.
d
i
s
t
[
i
d
]
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
c
x
=
{
p
.
x
}
 
c
y
=
{
p
.
y
}
 
r
=
{
2
0
}
 
f
i
l
l
=
{
f
i
l
l
}
 
s
t
r
o
k
e
=
{
T
H
E
M
E
.
b
o
r
d
e
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
.
x
}
 
y
=
{
p
.
y
 
+
 
1
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
d
o
m
i
n
a
n
t
B
a
s
e
l
i
n
e
=
"
m
i
d
d
l
e
"
 
f
o
n
t
S
i
z
e
=
"
1
3
"
 
f
i
l
l
=
"
#
f
f
f
"
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
h
e
a
d
i
n
g
}
>
{
i
d
}
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
.
x
 
+
 
1
4
}
 
y
=
{
p
.
y
 
-
 
1
4
}
 
f
o
n
t
S
i
z
e
=
"
1
1
"
 
f
i
l
l
=
{
T
H
E
M
E
.
a
c
c
e
n
t
}
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}
>
{
d
}
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
 
=
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
.
x
 
+
 
1
4
}
 
y
=
{
p
.
y
 
-
 
1
4
}
 
f
o
n
t
S
i
z
e
=
"
1
0
"
 
f
i
l
l
=
{
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
}
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}
>
∞
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
<
/
s
v
g
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
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
-
-
-
-
-
-
 
*
/


/
*
 
 
P
Q
 
p
a
n
e
l
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
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
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
P
Q
P
a
n
e
l
(
{
 
i
t
e
m
s
 
}
:
 
{
 
i
t
e
m
s
:
 
{
 
i
d
:
 
s
t
r
i
n
g
;
 
d
:
 
n
u
m
b
e
r
 
}
[
]
 
}
)
 
{


 
 
r
e
t
u
r
n
 
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
c
o
l
 
g
a
p
-
1
.
5
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
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
/
 
p
r
i
o
r
i
t
y
 
q
u
e
u
e
 
(
m
i
n
-
h
e
a
p
)
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
1
 
p
-
2
 
r
o
u
n
d
e
d
-
m
d
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
0
0
 
m
i
n
-
h
-
8
"
>


 
 
 
 
 
 
 
 
{
i
t
e
m
s
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
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
x
s
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
i
t
a
l
i
c
"
>
e
m
p
t
y
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
i
t
e
m
s
.
m
a
p
(
(
i
t
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
{
i
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
x
-
2
.
5
 
p
y
-
1
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
b
o
r
d
e
r
 
$
{
i
 
=
=
=
 
0
 
?
 
"
b
g
-
l
i
m
e
-
4
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
-
l
i
m
e
-
4
0
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
l
i
m
e
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
l
i
m
e
-
7
0
0
 
t
e
x
t
-
l
i
m
e
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
l
i
m
e
-
3
0
0
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
{
i
t
.
i
d
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
{
i
t
.
d
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
)


 
 
 
 
 
 
 
 
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
;


}




/
*
 
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
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
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
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
S
t
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
(
"
A
-
B
:
4
,
 
A
-
C
:
2
,
 
B
-
C
:
1
,
 
B
-
D
:
5
,
 
C
-
D
:
8
,
 
C
-
E
:
1
0
,
 
D
-
E
:
2
"
)
;


 
 
c
o
n
s
t
 
[
s
o
u
r
c
e
,
 
s
e
t
S
o
u
r
c
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
A
"
)
;


 
 
c
o
n
s
t
 
p
a
r
s
e
d
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
p
a
r
s
e
W
e
i
g
h
t
e
d
(
i
n
p
u
t
S
t
r
)
,
 
[
i
n
p
u
t
S
t
r
]
)
;


 
 
c
o
n
s
t
 
i
d
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
p
a
r
s
e
d
?
.
i
d
s
 
?
?
 
[
]
,
 
[
p
a
r
s
e
d
?
.
i
d
s
]
)
;


 
 
c
o
n
s
t
 
e
d
g
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
p
a
r
s
e
d
?
.
e
d
g
e
s
 
?
?
 
[
]
,
 
[
p
a
r
s
e
d
?
.
e
d
g
e
s
]
)
;




 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
b
u
i
l
d
D
i
j
k
s
t
r
a
F
r
a
m
e
s
(
i
d
s
,
 
e
d
g
e
s
,
 
s
o
u
r
c
e
)
,
 
[
i
d
s
,
 
e
d
g
e
s
,
 
s
o
u
r
c
e
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
c
o
n
s
t
 
p
o
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
a
u
t
o
L
a
y
o
u
t
(
i
d
s
)
,
 
[
i
d
s
]
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
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
{
`
D
i
j
k
s
t
r
a
 
f
r
o
m
 
$
{
s
o
u
r
c
e
}
`
}


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
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
3
 
f
l
e
x
-
w
r
a
p
 
i
t
e
m
s
-
e
n
d
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
f
l
e
x
-
1
 
m
i
n
-
w
-
6
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
W
e
i
g
h
t
e
d
 
e
d
g
e
s
 
(
A
-
B
:
w
,
 
n
o
n
-
n
e
g
a
t
i
v
e
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
S
t
r
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
A
-
B
:
4
,
 
B
-
C
:
1
,
 
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
N
o
n
-
n
e
g
a
t
i
v
e
 
w
e
i
g
h
t
s
 
o
n
l
y
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
l
a
s
s
i
c
"
,
 
v
a
l
u
e
:
 
"
A
-
B
:
4
,
 
A
-
C
:
2
,
 
B
-
C
:
1
,
 
B
-
D
:
5
,
 
C
-
D
:
8
,
 
C
-
E
:
1
0
,
 
D
-
E
:
2
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
h
o
r
t
c
u
t
"
,
 
v
a
l
u
e
:
 
"
A
-
B
:
1
0
,
 
A
-
C
:
1
,
 
C
-
B
:
1
,
 
B
-
D
:
1
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
h
a
i
n
"
,
 
v
a
l
u
e
:
 
"
A
-
B
:
1
,
 
B
-
C
:
2
,
 
C
-
D
:
3
,
 
D
-
E
:
4
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
T
r
i
a
n
g
l
e
"
,
 
v
a
l
u
e
:
 
"
A
-
B
:
3
,
 
B
-
C
:
4
,
 
A
-
C
:
6
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
W
e
i
g
h
t
e
d
(
v
)
)
 
s
e
t
I
n
p
u
t
S
t
r
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
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
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
/
 
s
o
u
r
c
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
o
u
r
c
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
S
o
u
r
c
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
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
1
0
0
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
<
o
p
t
i
o
n
 
k
e
y
=
{
i
d
}
 
v
a
l
u
e
=
{
i
d
}
>
{
i
d
}
<
/
o
p
t
i
o
n
>
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
>


 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
f
r
a
m
e
?
.
f
l
a
s
h
K
e
y
 
?
 
[
"
d
i
s
t
[
v
]
"
,
 
"
a
l
t
"
]
 
:
 
[
]
}
 
/
>
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
G
r
a
p
h
S
V
G
 
i
d
s
=
{
i
d
s
}
 
e
d
g
e
s
=
{
e
d
g
e
s
}
 
p
o
s
=
{
p
o
s
}
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
/
>
}


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
P
Q
P
a
n
e
l
 
i
t
e
m
s
=
{
f
r
a
m
e
.
p
q
}
 
/
>
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
 
g
a
p
-
2
 
f
l
e
x
-
w
r
a
p
 
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
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
{
[
[
"
#
0
6
b
6
d
4
"
,
 
"
f
r
o
n
t
i
e
r
"
]
,
 
[
"
#
1
0
b
9
8
1
"
,
 
"
f
i
n
a
l
i
z
e
d
"
]
,
 
[
"
#
f
b
b
f
2
4
"
,
 
"
r
e
l
a
x
a
t
i
o
n
 
t
r
e
e
 
e
d
g
e
"
]
]
.
m
a
p
(
(
[
c
,
 
l
]
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
l
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
i
n
l
i
n
e
-
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
1
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
2
.
5
 
h
-
2
.
5
 
r
o
u
n
d
e
d
-
s
m
"
 
s
t
y
l
e
=
{
{
 
b
a
c
k
g
r
o
u
n
d
:
 
c
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
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


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
 
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
f
u
l
l
"
>
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
r
u
n
 
D
i
j
k
s
t
r
a
.
"
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
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
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
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
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
s
e
c
t
i
o
n
s
 
=
 
[


 
 
 
 
{
 
t
i
t
l
e
:
 
"
T
h
e
 
p
r
o
b
l
e
m
"
,
 
b
o
d
y
:
 
"
G
i
v
e
n
 
a
 
w
e
i
g
h
t
e
d
 
g
r
a
p
h
 
w
i
t
h
 
n
o
n
-
n
e
g
a
t
i
v
e
 
e
d
g
e
 
w
e
i
g
h
t
s
 
a
n
d
 
a
 
s
o
u
r
c
e
 
s
,
 
f
i
n
d
 
t
h
e
 
s
h
o
r
t
e
s
t
-
p
a
t
h
 
d
i
s
t
a
n
c
e
 
f
r
o
m
 
s
 
t
o
 
e
v
e
r
y
 
o
t
h
e
r
 
v
e
r
t
e
x
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
G
r
e
e
d
y
 
i
n
s
i
g
h
t
"
,
 
b
o
d
y
:
 
"
R
e
p
e
a
t
e
d
l
y
 
p
i
c
k
 
t
h
e
 
u
n
f
i
n
a
l
i
z
e
d
 
v
e
r
t
e
x
 
w
i
t
h
 
t
h
e
 
s
m
a
l
l
e
s
t
 
t
e
n
t
a
t
i
v
e
 
d
i
s
t
a
n
c
e
,
 
f
i
n
a
l
i
z
e
 
i
t
,
 
a
n
d
 
r
e
l
a
x
 
i
t
s
 
o
u
t
g
o
i
n
g
 
e
d
g
e
s
.
 
T
h
i
s
 
w
o
r
k
s
 
b
e
c
a
u
s
e
 
o
n
c
e
 
a
 
v
e
r
t
e
x
 
i
s
 
e
x
t
r
a
c
t
e
d
 
w
i
t
h
 
d
i
s
t
 
=
 
d
,
 
n
o
 
s
h
o
r
t
e
r
 
p
a
t
h
 
c
a
n
 
e
x
i
s
t
 
(
a
l
l
 
w
e
i
g
h
t
s
 
≥
 
0
)
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
R
e
l
a
x
a
t
i
o
n
"
,
 
b
o
d
y
:
 
"
F
o
r
 
e
d
g
e
 
(
u
,
v
)
 
w
i
t
h
 
w
e
i
g
h
t
 
w
:
 
i
f
 
d
i
s
t
[
u
]
 
+
 
w
 
<
 
d
i
s
t
[
v
]
,
 
u
p
d
a
t
e
 
d
i
s
t
[
v
]
 
=
 
d
i
s
t
[
u
]
 
+
 
w
.
 
T
h
i
s
 
i
s
 
t
h
e
 
o
n
l
y
 
o
p
e
r
a
t
i
o
n
 
t
h
a
t
 
e
v
e
r
 
d
e
c
r
e
a
s
e
s
 
a
 
d
i
s
t
a
n
c
e
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
C
o
m
p
l
e
x
i
t
y
"
,
 
b
o
d
y
:
 
"
W
i
t
h
 
a
 
b
i
n
a
r
y
 
h
e
a
p
 
P
Q
:
 
O
(
(
V
 
+
 
E
)
 
l
o
g
 
V
)
.
 
W
i
t
h
 
a
 
s
i
m
p
l
e
 
a
r
r
a
y
:
 
O
(
V
²
)
.
 
F
o
r
 
d
e
n
s
e
 
g
r
a
p
h
s
 
t
h
e
 
a
r
r
a
y
 
w
i
n
s
;
 
f
o
r
 
s
p
a
r
s
e
,
 
t
h
e
 
h
e
a
p
.
"
 
}
,


 
 
]
;


 
 
r
e
t
u
r
n
 
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
c
o
l
 
g
a
p
-
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
m
e
n
t
a
l
 
m
o
d
e
l
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
W
a
t
e
r
 
f
l
o
w
i
n
g
 
t
h
r
o
u
g
h
 
p
i
p
e
s
.
 
C
h
e
a
p
e
s
t
 
f
i
r
s
t
.
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
I
m
a
g
i
n
e
 
y
o
u
 
a
r
e
 
d
r
o
p
p
i
n
g
 
w
a
t
e
r
 
a
t
 
t
h
e
 
s
o
u
r
c
e
 
a
n
d
 
l
e
t
t
i
n
g
 
i
t
 
f
l
o
w
 
t
h
r
o
u
g
h
 
p
i
p
e
s
 
o
f


 
 
 
 
 
 
 
 
 
 
d
i
f
f
e
r
e
n
t
 
l
e
n
g
t
h
s
.
 
T
h
e
 
w
a
t
e
r
 
r
e
a
c
h
e
s
 
e
a
c
h
 
j
u
n
c
t
i
o
n
 
a
t
 
t
h
e
 
e
a
r
l
i
e
s
t
 
p
o
s
s
i
b
l
e
 
t
i
m
e
,
 
t
h
a
t


 
 
 
 
 
 
 
 
 
 
t
i
m
e
 
i
s
 
t
h
e
 
s
h
o
r
t
e
s
t
-
p
a
t
h
 
d
i
s
t
a
n
c
e
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
s
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
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
 
f
o
n
t
-
m
o
n
o
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
l
i
m
e
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
l
i
m
e
-
4
0
0
 
m
b
-
2
"
>
0
{
i
 
+
 
1
}
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
o
n
t
-
b
o
l
d
 
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
s
t
o
n
e
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
s
t
o
n
e
-
5
0
 
m
b
-
1
"
>
{
s
.
t
i
t
l
e
}
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
s
.
b
o
d
y
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
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
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
I
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
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
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
)
 
{


 
 
r
e
t
u
r
n
 
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
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
R
u
n
 
t
h
e
s
e
 
i
n
 
t
h
e
 
V
i
s
u
a
l
i
z
e
 
t
a
b
 
a
n
d
 
c
h
e
c
k
 
t
h
e
 
f
i
n
a
l
 
d
i
s
t
a
n
c
e
s
.
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
"
C
l
a
s
s
i
c
 
p
r
e
s
e
t
 
f
r
o
m
 
A
:
 
w
h
a
t
 
i
s
 
d
i
s
t
[
D
]
?
 
 
(
V
e
r
i
f
y
 
b
y
 
s
t
e
p
p
i
n
g
 
t
h
r
o
u
g
h
!
)
"
,


 
 
 
 
 
 
 
 
"
S
h
o
r
t
c
u
t
 
p
r
e
s
e
t
 
f
r
o
m
 
A
:
 
w
h
a
t
 
i
s
 
d
i
s
t
[
B
]
?
 
 
(
E
x
p
e
c
t
e
d
:
 
2
,
 
v
i
a
 
A
→
C
→
B
,
 
n
o
t
 
t
h
e
 
d
i
r
e
c
t
 
A
-
B
:
1
0
)
"
,


 
 
 
 
 
 
 
 
"
W
h
y
 
c
a
n
'
t
 
D
i
j
k
s
t
r
a
 
h
a
n
d
l
e
 
n
e
g
a
t
i
v
e
 
w
e
i
g
h
t
s
?
 
E
x
p
l
a
i
n
 
i
n
 
o
n
e
 
l
i
n
e
.
"
,


 
 
 
 
 
 
]
.
m
a
p
(
(
q
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
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
s
t
o
n
e
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
s
t
o
n
e
-
2
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
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
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
l
i
m
e
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
l
i
m
e
-
4
0
0
"
>
#
{
i
 
+
 
1
}
<
/
s
p
a
n
>
 
{
q
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
C
a
r
d
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
;


}




/
*
 
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
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
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
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
)
 
{


 
 
r
e
t
u
r
n
 
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
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
W
h
y
 
n
o
n
-
n
e
g
a
t
i
v
e
 
w
e
i
g
h
t
s
?
<
/
S
u
b
H
e
a
d
i
n
g
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
T
h
e
 
c
o
r
r
e
c
t
n
e
s
s
 
a
r
g
u
m
e
n
t
 
r
e
l
i
e
s
 
o
n
 
"
o
n
c
e
 
e
x
t
r
a
c
t
e
d
,
 
d
i
s
t
[
u
]
 
i
s
 
f
i
n
a
l
.
"
 
I
f
 
a
 
n
e
g
a
t
i
v
e
 
e
d
g
e


 
 
 
 
 
 
 
 
 
 
e
x
i
s
t
e
d
,
 
a
 
l
a
t
e
r
-
e
x
t
r
a
c
t
e
d
 
v
e
r
t
e
x
 
c
o
u
l
d
 
o
f
f
e
r
 
a
 
s
h
o
r
t
e
r
 
r
o
u
t
e
 
b
a
c
k
 
t
h
r
o
u
g
h
 
u
,
 
b
r
e
a
k
i
n
g


 
 
 
 
 
 
 
 
 
 
t
h
e
 
i
n
v
a
r
i
a
n
t
.
 
U
s
e
 
B
e
l
l
m
a
n
-
F
o
r
d
 
f
o
r
 
g
r
a
p
h
s
 
w
i
t
h
 
n
e
g
a
t
i
v
e
 
e
d
g
e
s
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
I
n
t
e
r
v
i
e
w
 
n
u
a
n
c
e
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
u
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
l
i
s
t
-
d
i
s
c
 
p
l
-
5
 
s
p
a
c
e
-
y
-
1
.
5
 
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
s
t
o
n
e
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
F
o
r
 
u
n
w
e
i
g
h
t
e
d
 
g
r
a
p
h
s
,
 
B
F
S
 
d
o
e
s
 
t
h
e
 
s
a
m
e
 
j
o
b
 
i
n
 
O
(
V
+
E
)
,
 
d
o
n
'
t
 
o
v
e
r
-
e
n
g
i
n
e
e
r
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
"
L
a
z
y
"
 
D
i
j
k
s
t
r
a
 
r
e
i
n
s
e
r
t
s
 
o
n
 
r
e
l
a
x
 
a
n
d
 
s
k
i
p
s
 
s
t
a
l
e
 
e
n
t
r
i
e
s
,
 
s
i
m
p
l
e
r
 
t
o
 
c
o
d
e
 
t
h
a
n
 
d
e
c
r
e
a
s
e
-
k
e
y
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
A
*
 
=
 
D
i
j
k
s
t
r
a
 
+
 
h
e
u
r
i
s
t
i
c
;
 
f
a
l
l
 
b
a
c
k
 
t
o
 
D
i
j
k
s
t
r
a
 
w
h
e
n
 
h
(
n
)
 
=
 
0
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
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
-
-
-
-
-
-
 
*
/




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
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
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
 
L
4
_
D
i
j
k
s
t
r
a
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
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
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
y
 
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
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
e
t
 
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
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
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
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
"
p
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
P
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
<
C
o
d
e
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
"
 
/
>
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
:
 
[
]
)
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
D
i
j
k
s
t
r
a
'
s
 
a
l
g
o
r
i
t
h
m
 
i
s
 
g
u
a
r
a
n
t
e
e
d
 
c
o
r
r
e
c
t
 
o
n
l
y
 
w
h
e
n
…
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
T
h
e
 
g
r
a
p
h
 
i
s
 
a
 
D
A
G
"
,


 
 
 
 
 
 
 
 
"
A
l
l
 
e
d
g
e
 
w
e
i
g
h
t
s
 
a
r
e
 
n
o
n
-
n
e
g
a
t
i
v
e
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
g
r
a
p
h
 
i
s
 
c
o
n
n
e
c
t
e
d
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
g
r
a
p
h
 
i
s
 
u
n
d
i
r
e
c
t
e
d
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
N
e
g
a
t
i
v
e
 
w
e
i
g
h
t
s
 
c
a
n
 
i
n
v
a
l
i
d
a
t
e
 
t
h
e
 
f
i
n
a
l
i
z
a
t
i
o
n
 
i
n
v
a
r
i
a
n
t
.
 
B
e
l
l
m
a
n
-
F
o
r
d
 
h
a
n
d
l
e
s
 
t
h
e
m
 
i
n
s
t
e
a
d
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
B
e
s
t
-
c
a
s
e
 
r
u
n
t
i
m
e
 
u
s
i
n
g
 
a
 
b
i
n
a
r
y
 
h
e
a
p
 
p
r
i
o
r
i
t
y
 
q
u
e
u
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
V
²
)
"
,
 
"
O
(
(
V
 
+
 
E
)
 
l
o
g
 
V
)
"
,
 
"
O
(
V
 
+
 
E
)
"
,
 
"
O
(
V
 
·
 
E
)
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
E
a
c
h
 
v
e
r
t
e
x
 
i
s
 
e
x
t
r
a
c
t
e
d
 
o
n
c
e
 
(
V
 
l
o
g
 
V
)
,
 
e
a
c
h
 
e
d
g
e
 
p
o
s
s
i
b
l
y
 
t
r
i
g
g
e
r
s
 
a
 
d
e
c
r
e
a
s
e
-
k
e
y
 
(
E
 
l
o
g
 
V
)
.
 
T
o
t
a
l
 
O
(
(
V
+
E
)
 
l
o
g
 
V
)
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
f
t
e
r
 
e
x
t
r
a
c
t
-
m
i
n
 
r
e
t
u
r
n
s
 
u
,
 
w
e
…
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
U
p
d
a
t
e
 
d
i
s
t
[
u
]
"
,


 
 
 
 
 
 
 
 
"
M
a
r
k
 
u
 
f
i
n
a
l
i
z
e
d
,
 
i
t
s
 
d
i
s
t
a
n
c
e
 
w
o
n
'
t
 
c
h
a
n
g
e
 
a
g
a
i
n
"
,


 
 
 
 
 
 
 
 
"
A
d
d
 
u
'
s
 
e
d
g
e
s
 
t
o
 
M
S
T
"
,


 
 
 
 
 
 
 
 
"
R
e
m
o
v
e
 
u
 
f
r
o
m
 
t
h
e
 
g
r
a
p
h
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
E
x
t
r
a
c
t
-
m
i
n
 
g
u
a
r
a
n
t
e
e
s
 
t
h
e
 
p
a
t
h
 
t
o
 
u
 
i
s
 
o
p
t
i
m
a
l
 
u
n
d
e
r
 
n
o
n
-
n
e
g
a
t
i
v
e
 
w
e
i
g
h
t
s
.
 
N
o
 
f
u
r
t
h
e
r
 
r
e
l
a
x
a
t
i
o
n
 
c
a
n
 
i
m
p
r
o
v
e
 
d
i
s
t
[
u
]
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
R
u
n
 
D
i
j
k
s
t
r
a
 
f
r
o
m
 
A
 
o
n
 
A
-
B
:
1
0
,
 
A
-
C
:
1
,
 
C
-
B
:
1
,
 
B
-
D
:
1
.
 
d
i
s
t
[
D
]
 
=
 
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
1
"
,
 
"
3
"
,
 
"
1
1
"
,
 
"
1
2
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
A
→
C
 
(
1
)
 
→
 
B
 
(
2
)
 
→
 
D
 
(
3
)
.
 
D
i
r
e
c
t
 
A
→
B
 
w
o
u
l
d
 
c
o
s
t
 
1
0
;
 
t
h
e
 
s
h
o
r
t
c
u
t
 
v
i
a
 
C
 
i
s
 
m
u
c
h
 
c
h
e
a
p
e
r
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
D
i
j
k
s
t
r
a
'
s
 
S
h
o
r
t
e
s
t
 
P
a
t
h
"


 
 
 
 
 
 
l
e
v
e
l
=
{
4
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
5
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
V
e
r
y
 
h
i
g
h
,
 
r
o
u
t
i
n
g
,
 
m
a
p
s
,
 
n
e
t
w
o
r
k
 
p
r
o
t
o
c
o
l
s
.
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
B
e
l
l
m
a
n
-
F
o
r
d
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


