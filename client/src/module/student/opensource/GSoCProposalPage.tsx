
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
,
 
u
s
e
C
a
l
l
b
a
c
k
 
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


 
 
C
h
e
c
k
C
i
r
c
l
e
2
,
 
A
w
a
r
d
,
 
A
r
r
o
w
R
i
g
h
t
,


 
 
T
r
o
p
h
y
,


 
 
C
l
o
c
k
,


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
i
n
k
 
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
 
{
 
S
E
O
 
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
S
E
O
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
 
{
 
c
a
n
o
n
i
c
a
l
U
r
l
 
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
s
e
o
.
u
t
i
l
s
"
;


i
m
p
o
r
t
 
g
u
i
d
e
D
a
t
a
 
f
r
o
m
 
"
.
/
d
a
t
a
/
g
s
o
c
-
p
r
o
p
o
s
a
l
-
g
u
i
d
e
.
j
s
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
 
n
o
t
i
f
y
L
e
a
r
n
i
n
g
P
a
t
h
P
r
o
g
r
e
s
s
C
h
a
n
g
e
d
 
}
 
f
r
o
m
 
"
.
/
l
e
a
r
n
i
n
g
-
p
a
t
h
s
.
d
a
t
a
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
e
x
t
I
n
P
a
t
h
C
a
r
d
 
}
 
f
r
o
m
 
"
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
N
e
x
t
I
n
P
a
t
h
C
a
r
d
"
;




/
/
 
─
─
─
 
T
y
p
e
s
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


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
t
e
p
 
{


 
 
s
t
e
p
:
 
n
u
m
b
e
r
;


 
 
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


 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
?
:
 
n
u
m
b
e
r
;


 
 
l
e
v
e
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




/
/
 
─
─
─
 
D
a
t
a
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


c
o
n
s
t
 
S
T
E
P
S
:
 
S
t
e
p
[
]
 
=
 
g
u
i
d
e
D
a
t
a
.
g
s
o
c
P
r
o
p
o
s
a
l
R
o
a
d
m
a
p
 
a
s
 
S
t
e
p
[
]
;


c
o
n
s
t
 
S
T
O
R
A
G
E
_
K
E
Y
 
=
 
"
g
s
o
c
-
p
r
o
p
o
s
a
l
-
r
o
a
d
m
a
p
-
c
o
m
p
l
e
t
e
d
"
;




c
o
n
s
t
 
L
E
V
E
L
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
>
 
=
 
{


 
 
F
o
u
n
d
a
t
i
o
n
:
 
"
t
e
x
t
-
b
l
u
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
b
l
u
e
-
4
0
0
"
,


 
 
R
e
s
e
a
r
c
h
:
 
"
t
e
x
t
-
v
i
o
l
e
t
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
v
i
o
l
e
t
-
4
0
0
"
,


 
 
E
n
g
a
g
e
m
e
n
t
:
 
"
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
a
m
b
e
r
-
4
0
0
"
,


 
 
W
r
i
t
i
n
g
:
 
"
t
e
x
t
-
e
m
e
r
a
l
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
e
m
e
r
a
l
d
-
4
0
0
"
,


 
 
R
e
v
i
e
w
:
 
"
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
,


 
 
F
i
n
a
l
:
 
"
t
e
x
t
-
g
r
e
e
n
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
e
e
n
-
4
0
0
"
,


}
;




c
o
n
s
t
 
L
E
V
E
L
_
B
G
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
>
 
=
 
{


 
 
F
o
u
n
d
a
t
i
o
n
:
 
"
b
g
-
b
l
u
e
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
b
l
u
e
-
9
0
0
/
4
0
"
,


 
 
R
e
s
e
a
r
c
h
:
 
"
b
g
-
v
i
o
l
e
t
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
v
i
o
l
e
t
-
9
0
0
/
4
0
"
,


 
 
E
n
g
a
g
e
m
e
n
t
:
 
"
b
g
-
a
m
b
e
r
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
4
0
"
,


 
 
W
r
i
t
i
n
g
:
 
"
b
g
-
e
m
e
r
a
l
d
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
e
m
e
r
a
l
d
-
9
0
0
/
4
0
"
,


 
 
R
e
v
i
e
w
:
 
"
b
g
-
r
e
d
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
r
e
d
-
9
0
0
/
4
0
"
,


 
 
F
i
n
a
l
:
 
"
b
g
-
g
r
e
e
n
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
e
e
n
-
9
0
0
/
4
0
"
,


}
;




/
/
 
─
─
─
 
P
a
g
e
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


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
S
o
C
P
r
o
p
o
s
a
l
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
[
c
o
m
p
l
e
t
e
d
,
 
s
e
t
C
o
m
p
l
e
t
e
d
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
(
)
 
=
>
 
{


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
s
t
o
r
e
d
 
=
 
l
o
c
a
l
S
t
o
r
a
g
e
.
g
e
t
I
t
e
m
(
S
T
O
R
A
G
E
_
K
E
Y
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
s
t
o
r
e
d
 
?
 
n
e
w
 
S
e
t
(
J
S
O
N
.
p
a
r
s
e
(
s
t
o
r
e
d
)
)
 
:
 
n
e
w
 
S
e
t
(
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
w
 
S
e
t
(
)
;


 
 
 
 
}


 
 
}
)
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
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
i
d
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
C
o
m
p
l
e
t
e
d
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
d
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
d
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
d
)
;


 
 
 
 
 
 
t
r
y
 
{
 
l
o
c
a
l
S
t
o
r
a
g
e
.
s
e
t
I
t
e
m
(
S
T
O
R
A
G
E
_
K
E
Y
,
 
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
[
.
.
.
n
e
x
t
]
)
)
;
 
}
 
c
a
t
c
h
 
{
 
/
*
 
*
/
 
}


 
 
 
 
 
 
n
o
t
i
f
y
L
e
a
r
n
i
n
g
P
a
t
h
P
r
o
g
r
e
s
s
C
h
a
n
g
e
d
(
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
,
 
[
]
)
;




 
 
c
o
n
s
t
 
t
o
t
a
l
S
t
e
p
s
 
=
 
S
T
E
P
S
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
p
c
t
 
=
 
M
a
t
h
.
r
o
u
n
d
(
(
c
o
m
p
l
e
t
e
d
.
s
i
z
e
 
/
 
t
o
t
a
l
S
t
e
p
s
)
 
*
 
1
0
0
)
;


 
 
c
o
n
s
t
 
a
l
l
D
o
n
e
 
=
 
c
o
m
p
l
e
t
e
d
.
s
i
z
e
 
=
=
=
 
t
o
t
a
l
S
t
e
p
s
;


 
 
c
o
n
s
t
 
t
o
t
a
l
E
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
 
=
 
S
T
E
P
S
.
r
e
d
u
c
e
(
(
s
u
m
,
 
s
t
e
p
)
 
=
>
 
s
u
m
 
+
 
(
s
t
e
p
.
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
 
|
|
 
0
)
,
 
0
)
;


 
 
c
o
n
s
t
 
c
o
m
p
l
e
t
e
d
M
i
n
u
t
e
s
 
=
 
S
T
E
P
S


 
 
 
 
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
 
c
o
m
p
l
e
t
e
d
.
h
a
s
(
s
.
i
d
)
)


 
 
 
 
.
r
e
d
u
c
e
(
(
s
u
m
,
 
s
)
 
=
>
 
s
u
m
 
+
 
(
s
.
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
 
|
|
 
0
)
,
 
0
)
;


 
 
c
o
n
s
t
 
r
e
m
a
i
n
i
n
g
M
i
n
u
t
e
s
 
=
 
t
o
t
a
l
E
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
 
-
 
c
o
m
p
l
e
t
e
d
M
i
n
u
t
e
s
;


 
 
c
o
n
s
t
 
h
o
w
T
o
S
c
h
e
m
a
 
=
 
{


 
 
 
 
"
@
c
o
n
t
e
x
t
"
:
 
"
h
t
t
p
s
:
/
/
s
c
h
e
m
a
.
o
r
g
"
,


 
 
 
 
"
@
t
y
p
e
"
:
 
"
H
o
w
T
o
"
,


 
 
 
 
"
n
a
m
e
"
:
 
"
G
S
o
C
 
P
r
o
p
o
s
a
l
 
W
r
i
t
i
n
g
 
G
u
i
d
e
 
-
 
S
t
e
p
 
b
y
 
S
t
e
p
"
,


 
 
 
 
"
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
"
:
 
"
L
e
a
r
n
 
h
o
w
 
t
o
 
w
r
i
t
e
 
a
 
w
i
n
n
i
n
g
 
G
o
o
g
l
e
 
S
u
m
m
e
r
 
o
f
 
C
o
d
e
 
p
r
o
p
o
s
a
l
.
 
C
o
v
e
r
s
 
p
r
o
j
e
c
t
 
s
e
l
e
c
t
i
o
n
,
 
t
i
m
e
l
i
n
e
 
p
l
a
n
n
i
n
g
,
 
a
n
d
 
p
r
o
p
o
s
a
l
 
s
t
r
u
c
t
u
r
e
.
"
,


 
 
 
 
"
e
s
t
i
m
a
t
e
d
C
o
s
t
"
:
 
{
 
"
@
t
y
p
e
"
:
 
"
M
o
n
e
t
a
r
y
A
m
o
u
n
t
"
,
 
"
c
u
r
r
e
n
c
y
"
:
 
"
U
S
D
"
,
 
"
v
a
l
u
e
"
:
 
"
0
"
 
}
,


 
 
 
 
"
t
o
t
a
l
T
i
m
e
"
:
 
`
P
T
$
{
t
o
t
a
l
E
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
}
M
`
,


 
 
 
 
"
s
t
e
p
"
:
 
S
T
E
P
S
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
{


 
 
 
 
 
 
"
@
t
y
p
e
"
:
 
"
H
o
w
T
o
S
t
e
p
"
,


 
 
 
 
 
 
"
p
o
s
i
t
i
o
n
"
:
 
i
 
+
 
1
,


 
 
 
 
 
 
"
n
a
m
e
"
:
 
s
.
t
i
t
l
e
,


 
 
 
 
 
 
"
t
e
x
t
"
:
 
s
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
 
|
|
 
"
F
o
l
l
o
w
 
t
h
e
 
v
i
s
u
a
l
 
w
a
l
k
t
h
r
o
u
g
h
 
s
t
e
p
s
.
"


 
 
 
 
}
)
)


 
 
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
r
e
l
a
t
i
v
e
 
p
b
-
1
2
"
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
G
S
o
C
 
P
r
o
p
o
s
a
l
 
W
r
i
t
i
n
g
 
G
u
i
d
e
 
-
 
S
t
e
p
 
b
y
 
S
t
e
p
"


 
 
 
 
 
 
 
 
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
=
"
L
e
a
r
n
 
h
o
w
 
t
o
 
w
r
i
t
e
 
a
 
w
i
n
n
i
n
g
 
G
o
o
g
l
e
 
S
u
m
m
e
r
 
o
f
 
C
o
d
e
 
p
r
o
p
o
s
a
l
.
 
C
o
v
e
r
s
 
p
r
o
j
e
c
t
 
s
e
l
e
c
t
i
o
n
,
 
t
i
m
e
l
i
n
e
 
p
l
a
n
n
i
n
g
,
 
a
n
d
 
p
r
o
p
o
s
a
l
 
s
t
r
u
c
t
u
r
e
.
"


 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
s
=
"
G
S
o
C
 
p
r
o
p
o
s
a
l
 
g
u
i
d
e
,
 
G
o
o
g
l
e
 
S
u
m
m
e
r
 
o
f
 
C
o
d
e
,
 
G
S
o
C
 
t
i
p
s
,
 
o
p
e
n
 
s
o
u
r
c
e
 
p
r
o
p
o
s
a
l
,
 
G
S
o
C
 
a
p
p
l
i
c
a
t
i
o
n
"


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
g
s
o
c
-
p
r
o
p
o
s
a
l
"
)
}


 
 
 
 
 
 
 
 
o
g
I
m
a
g
e
=
"
/
o
g
/
o
g
-
g
s
o
c
-
p
r
o
p
o
s
a
l
.
p
n
g
"


 
 
 
 
 
 
 
 
s
t
r
u
c
t
u
r
e
d
D
a
t
a
=
{
h
o
w
T
o
S
c
h
e
m
a
}


 
 
 
 
 
 
/
>




 
 
 
 
 
 
{
/
*
 
A
t
m
o
s
p
h
e
r
i
c
 
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
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
-
z
-
1
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
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
a
b
s
o
l
u
t
e
 
-
t
o
p
-
3
2
 
-
r
i
g
h
t
-
3
2
 
w
-
1
5
0
 
h
-
1
5
0
 
b
g
-
r
e
d
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
r
e
d
-
9
0
0
/
2
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
4
0
"
 
/
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
a
b
s
o
l
u
t
e
 
-
b
o
t
t
o
m
-
3
2
 
-
l
e
f
t
-
3
2
 
w
-
1
2
5
 
h
-
1
2
5
 
b
g
-
o
r
a
n
g
e
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
o
r
a
n
g
e
-
9
0
0
/
2
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
4
0
"
 
/
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
o
p
a
c
i
t
y
-
[
0
.
0
2
]
 
d
a
r
k
:
o
p
a
c
i
t
y
-
[
0
.
0
3
]
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
I
m
a
g
e
:
 
"
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
c
u
r
r
e
n
t
C
o
l
o
r
 
1
p
x
,
 
t
r
a
n
s
p
a
r
e
n
t
 
1
p
x
)
,
 
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
9
0
d
e
g
,
 
c
u
r
r
e
n
t
C
o
l
o
r
 
1
p
x
,
 
t
r
a
n
s
p
a
r
e
n
t
 
1
p
x
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
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
S
i
z
e
:
 
"
4
8
p
x
 
4
8
p
x
"
,


 
 
 
 
 
 
 
 
 
 
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
 
y
:
 
2
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
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
6
,
 
e
a
s
e
:
 
[
0
.
2
2
,
 
1
,
 
0
.
3
6
,
 
1
]
 
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
c
e
n
t
e
r
 
m
b
-
1
0
 
m
t
-
6
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
h
1
 
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
d
i
s
p
l
a
y
 
t
e
x
t
-
4
x
l
 
s
m
:
t
e
x
t
-
5
x
l
 
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
r
a
c
k
i
n
g
-
t
i
g
h
t
 
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
5
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
3
"
>


 
 
 
 
 
 
 
 
 
 
G
S
o
C
 
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
d
i
e
n
t
-
a
c
c
e
n
t
"
>
P
r
o
p
o
s
a
l
 
G
u
i
d
e
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
h
1
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
l
g
 
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
5
0
0
 
m
a
x
-
w
-
x
l
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
A
 
m
e
n
t
o
r
-
g
u
i
d
e
d
 
j
o
u
r
n
e
y
 
f
r
o
m
 
u
n
d
e
r
s
t
a
n
d
i
n
g
 
G
S
o
C
 
t
o
 
w
r
i
t
i
n
g
 
a
 
p
r
o
p
o
s
a
l
 
t
h
a
t
 
g
e
t
s
 
a
c
c
e
p
t
e
d


 
 
 
 
 
 
 
 
<
/
p
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




 
 
 
 
 
 
{
/
*
 
S
t
a
t
s
 
*
/
}


 
 
 
 
 
 
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
 
y
:
 
2
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
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
5
,
 
d
e
l
a
y
:
 
0
.
1
 
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
3
 
g
a
p
-
4
 
m
b
-
8
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
A
w
a
r
d
,
 
v
a
l
u
e
:
 
t
o
t
a
l
S
t
e
p
s
,
 
l
a
b
e
l
:
 
"
S
t
e
p
s
"
,
 
i
c
o
n
C
o
l
o
r
:
 
"
t
e
x
t
-
r
e
d
-
5
0
0
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
C
h
e
c
k
C
i
r
c
l
e
2
,
 
v
a
l
u
e
:
 
c
o
m
p
l
e
t
e
d
.
s
i
z
e
,
 
l
a
b
e
l
:
 
"
C
o
m
p
l
e
t
e
d
"
,
 
i
c
o
n
C
o
l
o
r
:
 
"
t
e
x
t
-
g
r
e
e
n
-
5
0
0
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
T
r
o
p
h
y
,
 
v
a
l
u
e
:
 
`
$
{
p
c
t
}
%
`
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
o
g
r
e
s
s
"
,
 
i
c
o
n
C
o
l
o
r
:
 
"
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
5
0
0
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
C
l
o
c
k
,
 
v
a
l
u
e
:
 
a
l
l
D
o
n
e
 
?
 
"
D
o
n
e
!
"
 
:
 
c
o
m
p
l
e
t
e
d
.
s
i
z
e
 
>
 
0
 
?
 
`
$
{
r
e
m
a
i
n
i
n
g
M
i
n
u
t
e
s
}
 
m
i
n
 
l
e
f
t
`
 
:
 
`
$
{
t
o
t
a
l
E
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
}
 
m
i
n
 
t
o
t
a
l
`
,
 
l
a
b
e
l
:
 
"
E
s
t
.
 
T
i
m
e
"
,
 
i
c
o
n
C
o
l
o
r
:
 
"
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
5
0
0
"
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
s
t
a
t
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
t
a
t
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
e
l
a
y
:
 
0
.
1
 
+
 
i
 
*
 
0
.
0
8
,
 
d
u
r
a
t
i
o
n
:
 
0
.
4
 
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
 
p
-
5
 
t
e
x
t
-
c
e
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
a
t
.
i
c
o
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
{
`
w
-
6
 
h
-
6
 
$
{
s
t
a
t
.
i
c
o
n
C
o
l
o
r
}
 
m
x
-
a
u
t
o
 
m
b
-
3
`
}
 
/
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
f
o
n
t
-
d
i
s
p
l
a
y
 
t
e
x
t
-
2
x
l
 
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
g
r
a
y
-
9
5
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
s
t
a
t
.
v
a
l
u
e
}
<
/
p
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
5
0
0
 
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
 
m
t
-
0
.
5
"
>
{
s
t
a
t
.
l
a
b
e
l
}
<
/
p
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


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
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




 
 
 
 
 
 
{
/
*
 
C
o
m
p
l
e
t
i
o
n
 
b
a
n
n
e
r
 
*
/
}


 
 
 
 
 
 
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
a
l
l
D
o
n
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
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
 
y
:
 
-
8
 
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
 
y
:
 
0
 
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
 
y
:
 
-
8
 
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
m
b
-
8
 
b
g
-
g
r
e
e
n
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
e
e
n
-
9
0
0
/
2
0
 
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
e
e
n
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
e
e
n
-
8
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
 
p
-
5
 
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
4
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
o
p
h
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
8
 
h
-
8
 
t
e
x
t
-
g
r
e
e
n
-
5
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


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
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
b
a
s
e
 
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
g
r
e
e
n
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
g
r
e
e
n
-
3
0
0
"
>
Y
o
u
'
v
e
 
c
o
m
p
l
e
t
e
d
 
t
h
e
 
g
u
i
d
e
!
<
/
p
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
e
e
n
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
g
r
e
e
n
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
"
>
N
o
w
 
s
t
a
r
t
 
w
r
i
t
i
n
g
 
y
o
u
r
 
p
r
o
p
o
s
a
l
 
a
n
d
 
s
h
a
r
e
 
a
 
d
r
a
f
t
 
w
i
t
h
 
y
o
u
r
 
m
e
n
t
o
r
 
a
t
 
l
e
a
s
t
 
7
 
d
a
y
s
 
b
e
f
o
r
e
 
t
h
e
 
d
e
a
d
l
i
n
e
.
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
{
/
*
 
S
e
c
t
i
o
n
 
C
a
r
d
s
 
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


 
 
 
 
 
 
 
 
{
S
T
E
P
S
.
m
a
p
(
(
s
t
e
p
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
 
d
o
n
e
 
=
 
c
o
m
p
l
e
t
e
d
.
h
a
s
(
s
t
e
p
.
i
d
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
t
e
p
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
y
:
 
1
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
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
e
l
a
y
:
 
0
.
1
5
 
+
 
i
 
*
 
0
.
0
4
,
 
d
u
r
a
t
i
o
n
:
 
0
.
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
g
s
o
c
-
p
r
o
p
o
s
a
l
/
$
{
s
t
e
p
.
i
d
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
{
`
g
r
o
u
p
 
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
4
 
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
 
p
x
-
5
 
p
y
-
5
 
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
a
l
l
 
d
u
r
a
t
i
o
n
-
3
0
0
 
n
o
-
u
n
d
e
r
l
i
n
e
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
o
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
e
e
n
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
e
e
n
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
s
h
a
d
o
w
-
l
g
 
h
o
v
e
r
:
s
h
a
d
o
w
-
g
r
e
e
n
-
1
0
0
/
5
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
s
h
a
d
o
w
-
g
r
e
e
n
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
 
h
o
v
e
r
:
s
h
a
d
o
w
-
x
l
 
h
o
v
e
r
:
s
h
a
d
o
w
-
g
r
a
y
-
2
0
0
/
5
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
s
h
a
d
o
w
-
g
r
a
y
-
9
0
0
/
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
t
e
p
 
n
u
m
b
e
r
 
/
 
c
h
e
c
k
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
e
)
 
=
>
 
{
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;
 
t
o
g
g
l
e
(
s
t
e
p
.
i
d
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
o
n
e
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
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
5
 
h
-
5
 
t
e
x
t
-
g
r
e
e
n
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
5
 
h
-
5
 
r
o
u
n
d
e
d
-
f
u
l
l
 
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
{
s
t
e
p
.
s
t
e
p
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
o
n
t
e
n
t
 
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
-
1
 
m
i
n
-
w
-
0
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
 
m
b
-
0
.
5
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
{
`
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
b
o
l
d
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
o
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
5
0
0
 
l
i
n
e
-
t
h
r
o
u
g
h
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
 
&
&
 
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
5
0
0
"
>
~
{
s
t
e
p
.
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
}
 
m
i
n
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
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
b
o
l
d
 
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
 
r
o
u
n
d
e
d
 
$
{
L
E
V
E
L
_
B
G
[
s
t
e
p
.
l
e
v
e
l
]
 
|
|
 
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
"
}
 
$
{
L
E
V
E
L
_
C
O
L
O
R
[
s
t
e
p
.
l
e
v
e
l
]
 
|
|
 
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
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
l
e
v
e
l
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
5
0
0
 
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
s
t
e
p
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
r
r
o
w
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
R
i
g
h
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
3
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
 
g
r
o
u
p
-
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
5
0
0
 
d
a
r
k
:
g
r
o
u
p
-
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
4
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
1
 
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
a
l
l
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
N
e
x
t
I
n
P
a
t
h
C
a
r
d
 
c
u
r
r
e
n
t
S
l
u
g
=
"
g
s
o
c
-
p
r
o
p
o
s
a
l
"
 
c
o
m
p
l
e
t
e
d
=
{
a
l
l
D
o
n
e
}
 
/
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


