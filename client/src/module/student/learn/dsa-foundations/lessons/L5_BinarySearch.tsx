
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


 
 
I
n
l
i
n
e
C
o
d
e
,


 
 
L
e
d
e
,


 
 
P
i
l
l
B
u
t
t
o
n
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
b
i
n
a
r
y
-
s
e
a
r
c
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
 
 
L
o
c
a
l
 
t
y
p
e
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
C
e
l
l
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
c
o
m
p
a
r
e
"
 
|
 
"
s
w
a
p
"
 
|
 
"
s
o
r
t
e
d
"
 
|
 
"
a
c
t
i
v
e
"
 
|
 
"
p
i
v
o
t
"
 
|
 
"
v
i
s
i
t
e
d
"
 
|
 
"
d
o
n
e
"
 
|
 
"
l
o
w
"
 
|
 
"
h
i
g
h
"
 
|
 
"
m
i
d
"
;


t
y
p
e
 
V
a
r
i
a
n
t
 
=
 
"
b
a
s
i
c
"
 
|
 
"
l
o
w
e
r
"
 
|
 
"
u
p
p
e
r
"
 
|
 
"
r
o
t
a
t
e
d
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
 
 
L
o
c
a
l
 
A
r
r
a
y
B
a
r
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
S
:
 
R
e
c
o
r
d
<
C
e
l
l
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
b
o
r
d
e
r
,


 
 
c
o
m
p
a
r
e
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


 
 
s
w
a
p
:
 
"
#
f
5
9
e
0
b
"
,


 
 
s
o
r
t
e
d
:
 
"
#
a
3
e
6
3
5
"
,


 
 
a
c
t
i
v
e
:
 
"
#
8
1
8
c
f
8
"
,


 
 
p
i
v
o
t
:
 
"
#
f
9
7
3
1
6
"
,


 
 
v
i
s
i
t
e
d
:
 
"
#
d
6
d
3
d
1
"
,


 
 
d
o
n
e
:
 
"
#
a
3
e
6
3
5
"
,


 
 
l
o
w
:
 
"
#
6
0
a
5
f
a
"
,


 
 
h
i
g
h
:
 
"
#
f
8
7
1
7
1
"
,


 
 
m
i
d
:
 
"
#
f
b
9
2
3
c
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
 
A
r
r
a
y
B
a
r
s
(
{


 
 
v
a
l
u
e
s
,


 
 
s
t
a
t
e
s
,


 
 
p
o
i
n
t
e
r
s
,


 
 
h
e
i
g
h
t
 
=
 
1
6
0
,


}
:
 
{


 
 
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
;


 
 
s
t
a
t
e
s
?
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
p
o
i
n
t
e
r
s
?
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
>
;


 
 
h
e
i
g
h
t
?
:
 
n
u
m
b
e
r
;


}
)
 
{


 
 
c
o
n
s
t
 
m
a
x
 
=
 
M
a
t
h
.
m
a
x
(
.
.
.
v
a
l
u
e
s
,
 
1
)
;


 
 
c
o
n
s
t
 
b
a
r
W
 
=
 
M
a
t
h
.
m
a
x
(
2
4
,
 
M
a
t
h
.
m
i
n
(
4
8
,
 
M
a
t
h
.
f
l
o
o
r
(
4
8
0
 
/
 
(
v
a
l
u
e
s
.
l
e
n
g
t
h
 
|
|
 
1
)
)
)
)
;


 
 
c
o
n
s
t
 
g
a
p
 
=
 
4
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
W
 
=
 
v
a
l
u
e
s
.
l
e
n
g
t
h
 
*
 
(
b
a
r
W
 
+
 
g
a
p
)
 
-
 
g
a
p
;




 
 
c
o
n
s
t
 
p
t
r
B
y
I
d
x
:
 
R
e
c
o
r
d
<
n
u
m
b
e
r
,
 
s
t
r
i
n
g
[
]
>
 
=
 
{
}
;


 
 
i
f
 
(
p
o
i
n
t
e
r
s
)
 
{


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
[
n
a
m
e
,
 
i
d
x
]
 
o
f
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
p
o
i
n
t
e
r
s
)
)
 
{


 
 
 
 
 
 
i
f
 
(
!
p
t
r
B
y
I
d
x
[
i
d
x
]
)
 
p
t
r
B
y
I
d
x
[
i
d
x
]
 
=
 
[
]
;


 
 
 
 
 
 
p
t
r
B
y
I
d
x
[
i
d
x
]
.
p
u
s
h
(
n
a
m
e
)
;


 
 
 
 
}


 
 
}




 
 
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
"
>


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
t
o
t
a
l
W
,
 
m
a
r
g
i
n
:
 
"
0
 
a
u
t
o
"
,
 
h
e
i
g
h
t
:
 
h
e
i
g
h
t
 
+
 
3
2
 
}
}
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
t
o
t
a
l
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
h
e
i
g
h
t
 
+
 
3
2
}
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
b
l
o
c
k
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
v
a
l
u
e
s
.
m
a
p
(
(
v
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
 
b
a
r
H
 
=
 
M
a
t
h
.
m
a
x
(
4
,
 
M
a
t
h
.
f
l
o
o
r
(
(
v
 
/
 
m
a
x
)
 
*
 
(
h
e
i
g
h
t
 
-
 
8
)
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
 
=
 
i
 
*
 
(
b
a
r
W
 
+
 
g
a
p
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
 
=
 
h
e
i
g
h
t
 
-
 
b
a
r
H
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
 
=
 
(
s
t
a
t
e
s
?
.
[
i
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
)
 
a
s
 
C
e
l
l
S
t
a
t
e
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
l
o
r
 
=
 
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
S
[
s
t
a
t
e
]
 
?
?
 
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
S
.
d
e
f
a
u
l
t
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
t
r
s
 
=
 
p
t
r
B
y
I
d
x
[
i
]
 
?
?
 
[
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
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
b
a
r
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
b
a
r
H
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
o
l
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
x
=
{
3
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
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
:
 
"
a
l
l
 
0
.
2
5
s
 
e
a
s
e
"
 
}
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
x
 
+
 
b
a
r
W
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
h
e
i
g
h
t
 
+
 
1
2
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
1
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
t
r
s
.
m
a
p
(
(
p
,
 
p
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
p
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
x
 
+
 
b
a
r
W
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
h
e
i
g
h
t
 
+
 
2
6
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
9
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
 
 
F
r
a
m
e
 
t
y
p
e
s
 
&
 
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




i
n
t
e
r
f
a
c
e
 
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
 
b
o
o
l
e
a
n
 
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


 
 
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
;


 
 
s
t
a
t
e
s
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
p
o
i
n
t
e
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
 
n
u
m
b
e
r
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


 
 
h
i
g
h
l
i
g
h
t
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
_
B
A
S
I
C
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
b
i
n
a
r
y
S
e
a
r
c
h
(
A
,
 
t
a
r
g
e
t
)
:
"
,


 
 
"
 
 
l
o
w
 
<
-
 
0
;
 
h
i
g
h
 
<
-
 
n
 
-
 
1
"
,


 
 
"
 
 
w
h
i
l
e
 
l
o
w
 
<
=
 
h
i
g
h
:
"
,


 
 
"
 
 
 
 
m
i
d
 
<
-
 
(
l
o
w
 
+
 
h
i
g
h
)
 
/
 
2
"
,


 
 
"
 
 
 
 
i
f
 
A
[
m
i
d
]
 
=
 
t
a
r
g
e
t
:
 
r
e
t
u
r
n
 
m
i
d
"
,


 
 
"
 
 
 
 
e
l
s
e
 
i
f
 
A
[
m
i
d
]
 
<
 
t
a
r
g
e
t
:
 
l
o
w
 
<
-
 
m
i
d
 
+
 
1
"
,


 
 
"
 
 
 
 
e
l
s
e
:
 
h
i
g
h
 
<
-
 
m
i
d
 
-
 
1
"
,


 
 
"
 
 
r
e
t
u
r
n
 
-
1
"
,


]
;




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
_
L
O
W
E
R
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
l
o
w
e
r
B
o
u
n
d
(
A
,
 
t
a
r
g
e
t
)
:
"
,


 
 
"
 
 
l
o
w
 
<
-
 
0
;
 
h
i
g
h
 
<
-
 
n
"
,


 
 
"
 
 
w
h
i
l
e
 
l
o
w
 
<
 
h
i
g
h
:
"
,


 
 
"
 
 
 
 
m
i
d
 
<
-
 
(
l
o
w
 
+
 
h
i
g
h
)
 
/
 
2
"
,


 
 
"
 
 
 
 
i
f
 
A
[
m
i
d
]
 
<
 
t
a
r
g
e
t
:
 
l
o
w
 
<
-
 
m
i
d
 
+
 
1
"
,


 
 
"
 
 
 
 
e
l
s
e
:
 
h
i
g
h
 
<
-
 
m
i
d
"
,


 
 
"
 
 
r
e
t
u
r
n
 
l
o
w
 
 
/
/
 
f
i
r
s
t
 
i
n
d
e
x
 
w
i
t
h
 
A
[
i
]
 
>
=
 
t
a
r
g
e
t
"
,


]
;




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
_
U
P
P
E
R
 
=
 
[


 
 
"
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
p
e
r
B
o
u
n
d
(
A
,
 
t
a
r
g
e
t
)
:
"
,


 
 
"
 
 
l
o
w
 
<
-
 
0
;
 
h
i
g
h
 
<
-
 
n
"
,


 
 
"
 
 
w
h
i
l
e
 
l
o
w
 
<
 
h
i
g
h
:
"
,


 
 
"
 
 
 
 
m
i
d
 
<
-
 
(
l
o
w
 
+
 
h
i
g
h
)
 
/
 
2
"
,


 
 
"
 
 
 
 
i
f
 
A
[
m
i
d
]
 
<
=
 
t
a
r
g
e
t
:
 
l
o
w
 
<
-
 
m
i
d
 
+
 
1
"
,


 
 
"
 
 
 
 
e
l
s
e
:
 
h
i
g
h
 
<
-
 
m
i
d
"
,


 
 
"
 
 
r
e
t
u
r
n
 
l
o
w
 
 
/
/
 
f
i
r
s
t
 
i
n
d
e
x
 
w
i
t
h
 
A
[
i
]
 
>
 
t
a
r
g
e
t
"
,


]
;




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
_
R
O
T
A
T
E
D
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
s
e
a
r
c
h
R
o
t
a
t
e
d
(
A
,
 
t
a
r
g
e
t
)
:
"
,


 
 
"
 
 
l
o
w
 
<
-
 
0
;
 
h
i
g
h
 
<
-
 
n
 
-
 
1
"
,


 
 
"
 
 
w
h
i
l
e
 
l
o
w
 
<
=
 
h
i
g
h
:
"
,


 
 
"
 
 
 
 
m
i
d
 
<
-
 
(
l
o
w
 
+
 
h
i
g
h
)
 
/
 
2
"
,


 
 
"
 
 
 
 
i
f
 
A
[
m
i
d
]
 
=
 
t
a
r
g
e
t
:
 
r
e
t
u
r
n
 
m
i
d
"
,


 
 
"
 
 
 
 
i
f
 
A
[
l
o
w
]
 
<
=
 
A
[
m
i
d
]
:
 
 
 
 
 
 
 
 
 
 
/
/
 
l
e
f
t
 
h
a
l
f
 
s
o
r
t
e
d
"
,


 
 
"
 
 
 
 
 
 
i
f
 
A
[
l
o
w
]
 
<
=
 
t
a
r
g
e
t
 
<
 
A
[
m
i
d
]
:
 
h
i
g
h
 
<
-
 
m
i
d
 
-
 
1
"
,


 
 
"
 
 
 
 
 
 
e
l
s
e
:
 
l
o
w
 
<
-
 
m
i
d
 
+
 
1
"
,


 
 
"
 
 
 
 
e
l
s
e
:
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
r
i
g
h
t
 
h
a
l
f
 
s
o
r
t
e
d
"
,


 
 
"
 
 
 
 
 
 
i
f
 
A
[
m
i
d
]
 
<
 
t
a
r
g
e
t
 
<
=
 
A
[
h
i
g
h
]
:
 
l
o
w
 
<
-
 
m
i
d
 
+
 
1
"
,


 
 
"
 
 
 
 
 
 
e
l
s
e
:
 
h
i
g
h
 
<
-
 
m
i
d
 
-
 
1
"
,


 
 
"
 
 
r
e
t
u
r
n
 
-
1
"
,


]
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
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
t
a
t
e
S
h
e
l
l
(
n
:
 
n
u
m
b
e
r
,
 
l
o
w
:
 
n
u
m
b
e
r
,
 
h
i
g
h
:
 
n
u
m
b
e
r
,
 
a
c
t
i
v
e
:
 
"
i
n
c
l
"
 
|
 
"
e
x
c
l
"
 
=
 
"
i
n
c
l
"
)
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
 
{


 
 
r
e
t
u
r
n
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
n
 
}
,
 
(
_
,
 
k
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
n
s
i
d
e
 
=
 
a
c
t
i
v
e
 
=
=
=
 
"
i
n
c
l
"
 
?
 
k
 
>
=
 
l
o
w
 
&
&
 
k
 
<
=
 
h
i
g
h
 
:
 
k
 
>
=
 
l
o
w
 
&
&
 
k
 
<
 
h
i
g
h
;


 
 
 
 
r
e
t
u
r
n
 
i
n
s
i
d
e
 
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
 
:
 
"
v
i
s
i
t
e
d
"
;


 
 
}
)
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
 
b
u
i
l
d
B
a
s
i
c
(
a
r
r
:
 
n
u
m
b
e
r
[
]
,
 
t
a
r
g
e
t
:
 
n
u
m
b
e
r
)
:
 
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
 
n
 
=
 
a
r
r
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
 
f
:
 
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
 
n
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
 
a
s
 
C
e
l
l
S
t
a
t
e
)
,
 
p
o
i
n
t
e
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
B
i
n
a
r
y
 
s
e
a
r
c
h
 
f
o
r
 
$
{
t
a
r
g
e
t
}
 
i
n
 
s
o
r
t
e
d
 
a
r
r
a
y
.
`
 
}
)
;




 
 
l
e
t
 
l
o
w
 
=
 
0
,
 
h
i
g
h
 
=
 
n
 
-
 
1
;


 
 
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
 
1
,
 
v
a
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
S
h
e
l
l
(
n
,
 
l
o
w
,
 
h
i
g
h
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
 
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
I
n
i
t
i
a
l
 
w
i
n
d
o
w
 
[
$
{
l
o
w
}
.
.
$
{
h
i
g
h
}
]
`
 
}
)
;




 
 
w
h
i
l
e
 
(
l
o
w
 
<
=
 
h
i
g
h
)
 
{


 
 
 
 
c
o
n
s
t
 
m
i
d
 
=
 
M
a
t
h
.
f
l
o
o
r
(
(
l
o
w
 
+
 
h
i
g
h
)
 
/
 
2
)
;


 
 
 
 
c
o
n
s
t
 
s
t
 
=
 
s
t
a
t
e
S
h
e
l
l
(
n
,
 
l
o
w
,
 
h
i
g
h
)
;


 
 
 
 
s
t
[
m
i
d
]
 
=
 
"
m
i
d
"
;


 
 
 
 
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
 
3
,
 
v
a
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
,
 
m
i
d
,
 
"
A
[
m
i
d
]
"
:
 
a
r
r
[
m
i
d
]
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
w
,
 
m
i
d
,
 
h
i
g
h
 
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
m
i
d
 
=
 
f
l
o
o
r
(
(
$
{
l
o
w
}
 
+
 
$
{
h
i
g
h
}
)
 
/
 
2
)
 
=
 
$
{
m
i
d
}
.
 
A
[
$
{
m
i
d
}
]
 
=
 
$
{
a
r
r
[
m
i
d
]
}
`
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
m
i
d
"
 
}
)
;


 
 
 
 
i
f
 
(
a
r
r
[
m
i
d
]
 
=
=
=
 
t
a
r
g
e
t
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
s
t
2
 
=
 
s
t
a
t
e
S
h
e
l
l
(
n
,
 
l
o
w
,
 
h
i
g
h
)
;


 
 
 
 
 
 
s
t
2
[
m
i
d
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
{
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
,
 
m
i
d
,
 
t
a
r
g
e
t
,
 
f
o
u
n
d
:
 
m
i
d
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
2
,
 
p
o
i
n
t
e
r
s
:
 
{
 
m
i
d
 
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
A
[
$
{
m
i
d
}
]
 
=
 
$
{
t
a
r
g
e
t
}
 
-
 
f
o
u
n
d
 
a
t
 
i
n
d
e
x
 
$
{
m
i
d
}
!
`
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
f
o
u
n
d
"
 
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
 
e
l
s
e
 
i
f
 
(
a
r
r
[
m
i
d
]
 
<
 
t
a
r
g
e
t
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
 
5
,
 
v
a
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
,
 
m
i
d
,
 
"
A
[
m
i
d
]
"
:
 
a
r
r
[
m
i
d
]
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
S
h
e
l
l
(
n
,
 
l
o
w
,
 
h
i
g
h
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
w
,
 
m
i
d
,
 
h
i
g
h
 
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
A
[
$
{
m
i
d
}
]
 
=
 
$
{
a
r
r
[
m
i
d
]
}
 
<
 
$
{
t
a
r
g
e
t
}
 
-
 
t
a
r
g
e
t
 
i
s
 
i
n
 
t
h
e
 
r
i
g
h
t
 
h
a
l
f
.
 
l
o
w
 
<
-
 
$
{
m
i
d
 
+
 
1
}
`
 
}
)
;


 
 
 
 
 
 
l
o
w
 
=
 
m
i
d
 
+
 
1
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
{
 
l
i
n
e
:
 
6
,
 
v
a
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
,
 
m
i
d
,
 
"
A
[
m
i
d
]
"
:
 
a
r
r
[
m
i
d
]
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
S
h
e
l
l
(
n
,
 
l
o
w
,
 
h
i
g
h
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
w
,
 
m
i
d
,
 
h
i
g
h
 
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
A
[
$
{
m
i
d
}
]
 
=
 
$
{
a
r
r
[
m
i
d
]
}
 
>
 
$
{
t
a
r
g
e
t
}
 
-
 
t
a
r
g
e
t
 
i
s
 
i
n
 
t
h
e
 
l
e
f
t
 
h
a
l
f
.
 
h
i
g
h
 
<
-
 
$
{
m
i
d
 
-
 
1
}
`
 
}
)
;


 
 
 
 
 
 
h
i
g
h
 
=
 
m
i
d
 
-
 
1
;


 
 
 
 
}


 
 
}




 
 
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
 
7
,
 
v
a
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
,
 
t
a
r
g
e
t
,
 
f
o
u
n
d
:
 
-
1
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
)
 
=
>
 
"
v
i
s
i
t
e
d
"
 
a
s
 
C
e
l
l
S
t
a
t
e
)
,
 
p
o
i
n
t
e
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
l
o
w
 
(
$
{
l
o
w
}
)
 
>
 
h
i
g
h
 
(
$
{
h
i
g
h
}
)
 
-
 
$
{
t
a
r
g
e
t
}
 
n
o
t
 
p
r
e
s
e
n
t
.
 
R
e
t
u
r
n
 
-
1
.
`
 
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
L
o
w
e
r
U
p
p
e
r
(
a
r
r
:
 
n
u
m
b
e
r
[
]
,
 
t
a
r
g
e
t
:
 
n
u
m
b
e
r
,
 
u
p
p
e
r
 
=
 
f
a
l
s
e
)
:
 
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
 
n
 
=
 
a
r
r
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
 
f
:
 
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


 
 
c
o
n
s
t
 
t
i
t
l
e
 
=
 
u
p
p
e
r
 
?
 
"
u
p
p
e
r
B
o
u
n
d
"
 
:
 
"
l
o
w
e
r
B
o
u
n
d
"
;


 
 
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
 
n
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
 
a
s
 
C
e
l
l
S
t
a
t
e
)
,
 
p
o
i
n
t
e
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
$
{
t
i
t
l
e
}
:
 
f
i
r
s
t
 
i
n
d
e
x
 
i
 
w
i
t
h
 
A
[
i
]
 
$
{
u
p
p
e
r
 
?
 
"
>
"
 
:
 
"
>
=
"
}
 
$
{
t
a
r
g
e
t
}
`
 
}
)
;


 
 
l
e
t
 
l
o
w
 
=
 
0
,
 
h
i
g
h
 
=
 
n
;


 
 
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
 
1
,
 
v
a
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
S
h
e
l
l
(
n
,
 
l
o
w
,
 
h
i
g
h
,
 
"
e
x
c
l
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
:
 
M
a
t
h
.
m
i
n
(
h
i
g
h
,
 
n
 
-
 
1
)
 
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
H
a
l
f
-
o
p
e
n
 
w
i
n
d
o
w
 
[
$
{
l
o
w
}
,
 
$
{
h
i
g
h
}
)
.
 
R
e
s
u
l
t
 
l
i
v
e
s
 
s
o
m
e
w
h
e
r
e
 
h
e
r
e
.
`
 
}
)
;




 
 
w
h
i
l
e
 
(
l
o
w
 
<
 
h
i
g
h
)
 
{


 
 
 
 
c
o
n
s
t
 
m
i
d
 
=
 
M
a
t
h
.
f
l
o
o
r
(
(
l
o
w
 
+
 
h
i
g
h
)
 
/
 
2
)
;


 
 
 
 
c
o
n
s
t
 
s
t
 
=
 
s
t
a
t
e
S
h
e
l
l
(
n
,
 
l
o
w
,
 
h
i
g
h
,
 
"
e
x
c
l
"
)
;


 
 
 
 
s
t
[
m
i
d
]
 
=
 
"
m
i
d
"
;


 
 
 
 
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
 
3
,
 
v
a
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
,
 
m
i
d
,
 
"
A
[
m
i
d
]
"
:
 
a
r
r
[
m
i
d
]
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
w
,
 
m
i
d
,
 
h
i
g
h
:
 
M
a
t
h
.
m
i
n
(
h
i
g
h
,
 
n
 
-
 
1
)
 
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
m
i
d
 
=
 
$
{
m
i
d
}
,
 
A
[
$
{
m
i
d
}
]
 
=
 
$
{
a
r
r
[
m
i
d
]
}
`
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
m
i
d
"
 
}
)
;




 
 
 
 
c
o
n
s
t
 
c
o
n
d
i
t
i
o
n
 
=
 
u
p
p
e
r
 
?
 
a
r
r
[
m
i
d
]
 
<
=
 
t
a
r
g
e
t
 
:
 
a
r
r
[
m
i
d
]
 
<
 
t
a
r
g
e
t
;


 
 
 
 
i
f
 
(
c
o
n
d
i
t
i
o
n
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
 
4
,
 
v
a
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
,
 
m
i
d
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
S
h
e
l
l
(
n
,
 
m
i
d
 
+
 
1
,
 
h
i
g
h
,
 
"
e
x
c
l
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
w
:
 
m
i
d
 
+
 
1
,
 
h
i
g
h
:
 
M
a
t
h
.
m
i
n
(
h
i
g
h
,
 
n
 
-
 
1
)
 
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
A
[
$
{
m
i
d
}
]
 
=
 
$
{
a
r
r
[
m
i
d
]
}
 
$
{
u
p
p
e
r
 
?
 
"
<
=
"
 
:
 
"
<
"
}
 
$
{
t
a
r
g
e
t
}
 
-
 
a
n
s
w
e
r
 
m
u
s
t
 
b
e
 
s
t
r
i
c
t
l
y
 
r
i
g
h
t
.
 
l
o
w
 
<
-
 
$
{
m
i
d
 
+
 
1
}
`
 
}
)
;


 
 
 
 
 
 
l
o
w
 
=
 
m
i
d
 
+
 
1
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
{
 
l
i
n
e
:
 
5
,
 
v
a
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
,
 
m
i
d
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
S
h
e
l
l
(
n
,
 
l
o
w
,
 
m
i
d
,
 
"
e
x
c
l
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
:
 
M
a
t
h
.
m
a
x
(
m
i
d
 
-
 
1
,
 
0
)
 
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
A
[
$
{
m
i
d
}
]
 
=
 
$
{
a
r
r
[
m
i
d
]
}
 
$
{
u
p
p
e
r
 
?
 
"
>
"
 
:
 
"
>
=
"
}
 
$
{
t
a
r
g
e
t
}
 
-
 
m
i
d
 
c
o
u
l
d
 
b
e
 
t
h
e
 
a
n
s
w
e
r
.
 
h
i
g
h
 
<
-
 
$
{
m
i
d
}
`
 
}
)
;


 
 
 
 
 
 
h
i
g
h
 
=
 
m
i
d
;


 
 
 
 
}


 
 
}




 
 
c
o
n
s
t
 
s
t
 
=
 
a
r
r
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
(
k
 
=
=
=
 
l
o
w
 
?
 
"
d
o
n
e
"
 
:
 
"
v
i
s
i
t
e
d
"
)
 
a
s
 
C
e
l
l
S
t
a
t
e
)
;


 
 
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
 
6
,
 
v
a
r
s
:
 
{
 
r
e
s
u
l
t
:
 
l
o
w
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
,
 
p
o
i
n
t
e
r
s
:
 
{
 
r
e
s
u
l
t
:
 
M
a
t
h
.
m
i
n
(
l
o
w
,
 
n
 
-
 
1
)
 
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
C
o
n
v
e
r
g
e
d
:
 
l
o
w
 
=
 
h
i
g
h
 
=
 
$
{
l
o
w
}
.
 
$
{
t
i
t
l
e
}
 
r
e
t
u
r
n
s
 
$
{
l
o
w
}
$
{
l
o
w
 
<
 
n
 
?
 
`
 
(
A
[
$
{
l
o
w
}
]
 
=
 
$
{
a
r
r
[
l
o
w
]
}
)
`
 
:
 
"
 
(
p
a
s
t
 
e
n
d
)
"
}
.
`
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
r
e
s
u
l
t
"
 
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
R
o
t
a
t
e
d
(
a
r
r
:
 
n
u
m
b
e
r
[
]
,
 
t
a
r
g
e
t
:
 
n
u
m
b
e
r
)
:
 
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
 
n
 
=
 
a
r
r
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
 
f
:
 
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
 
n
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
 
a
s
 
C
e
l
l
S
t
a
t
e
)
,
 
p
o
i
n
t
e
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
e
a
r
c
h
 
f
o
r
 
$
{
t
a
r
g
e
t
}
 
i
n
 
r
o
t
a
t
e
d
 
s
o
r
t
e
d
 
a
r
r
a
y
.
`
 
}
)
;


 
 
l
e
t
 
l
o
w
 
=
 
0
,
 
h
i
g
h
 
=
 
n
 
-
 
1
;


 
 
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
 
1
,
 
v
a
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
S
h
e
l
l
(
n
,
 
l
o
w
,
 
h
i
g
h
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
 
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
I
n
i
t
i
a
l
 
[
$
{
l
o
w
}
.
.
$
{
h
i
g
h
}
]
`
 
}
)
;




 
 
w
h
i
l
e
 
(
l
o
w
 
<
=
 
h
i
g
h
)
 
{


 
 
 
 
c
o
n
s
t
 
m
i
d
 
=
 
M
a
t
h
.
f
l
o
o
r
(
(
l
o
w
 
+
 
h
i
g
h
)
 
/
 
2
)
;


 
 
 
 
c
o
n
s
t
 
s
t
 
=
 
s
t
a
t
e
S
h
e
l
l
(
n
,
 
l
o
w
,
 
h
i
g
h
)
;


 
 
 
 
s
t
[
m
i
d
]
 
=
 
"
m
i
d
"
;


 
 
 
 
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
 
3
,
 
v
a
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
,
 
m
i
d
,
 
"
A
[
m
i
d
]
"
:
 
a
r
r
[
m
i
d
]
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
w
,
 
m
i
d
,
 
h
i
g
h
 
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
m
i
d
 
=
 
$
{
m
i
d
}
,
 
A
[
$
{
m
i
d
}
]
 
=
 
$
{
a
r
r
[
m
i
d
]
}
`
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
m
i
d
"
 
}
)
;


 
 
 
 
i
f
 
(
a
r
r
[
m
i
d
]
 
=
=
=
 
t
a
r
g
e
t
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
s
t
2
 
=
 
s
t
a
t
e
S
h
e
l
l
(
n
,
 
l
o
w
,
 
h
i
g
h
)
;


 
 
 
 
 
 
s
t
2
[
m
i
d
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
{
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
m
i
d
,
 
f
o
u
n
d
:
 
m
i
d
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
2
,
 
p
o
i
n
t
e
r
s
:
 
{
 
m
i
d
 
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
F
o
u
n
d
 
$
{
t
a
r
g
e
t
}
 
a
t
 
$
{
m
i
d
}
!
`
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
f
o
u
n
d
"
 
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


 
 
 
 
i
f
 
(
a
r
r
[
l
o
w
]
 
<
=
 
a
r
r
[
m
i
d
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
{
 
l
i
n
e
:
 
5
,
 
v
a
r
s
:
 
{
 
l
o
w
,
 
m
i
d
,
 
"
A
[
l
o
w
]
"
:
 
a
r
r
[
l
o
w
]
,
 
"
A
[
m
i
d
]
"
:
 
a
r
r
[
m
i
d
]
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
w
,
 
m
i
d
,
 
h
i
g
h
 
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
L
e
f
t
 
h
a
l
f
 
A
[
$
{
l
o
w
}
.
.
$
{
m
i
d
}
]
 
i
s
 
s
o
r
t
e
d
 
(
A
[
l
o
w
]
 
<
=
 
A
[
m
i
d
]
)
.
`
 
}
)
;


 
 
 
 
 
 
i
f
 
(
a
r
r
[
l
o
w
]
 
<
=
 
t
a
r
g
e
t
 
&
&
 
t
a
r
g
e
t
 
<
 
a
r
r
[
m
i
d
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
{
 
l
i
n
e
:
 
6
,
 
v
a
r
s
:
 
{
 
l
o
w
,
 
m
i
d
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
S
h
e
l
l
(
n
,
 
l
o
w
,
 
m
i
d
 
-
 
1
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
:
 
m
i
d
 
-
 
1
 
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
T
a
r
g
e
t
 
i
s
 
i
n
 
t
h
e
 
s
o
r
t
e
d
 
l
e
f
t
:
 
h
i
g
h
 
<
-
 
$
{
m
i
d
 
-
 
1
}
`
 
}
)
;


 
 
 
 
 
 
 
 
h
i
g
h
 
=
 
m
i
d
 
-
 
1
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
{
 
l
i
n
e
:
 
7
,
 
v
a
r
s
:
 
{
 
l
o
w
,
 
m
i
d
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
S
h
e
l
l
(
n
,
 
m
i
d
 
+
 
1
,
 
h
i
g
h
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
w
:
 
m
i
d
 
+
 
1
,
 
h
i
g
h
 
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
T
a
r
g
e
t
 
n
o
t
 
i
n
 
l
e
f
t
 
h
a
l
f
.
 
S
e
a
r
c
h
 
r
i
g
h
t
:
 
l
o
w
 
<
-
 
$
{
m
i
d
 
+
 
1
}
`
 
}
)
;


 
 
 
 
 
 
 
 
l
o
w
 
=
 
m
i
d
 
+
 
1
;


 
 
 
 
 
 
}


 
 
 
 
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
{
 
l
i
n
e
:
 
8
,
 
v
a
r
s
:
 
{
 
m
i
d
,
 
h
i
g
h
,
 
"
A
[
m
i
d
]
"
:
 
a
r
r
[
m
i
d
]
,
 
"
A
[
h
i
g
h
]
"
:
 
a
r
r
[
h
i
g
h
]
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
w
,
 
m
i
d
,
 
h
i
g
h
 
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
R
i
g
h
t
 
h
a
l
f
 
A
[
$
{
m
i
d
}
.
.
$
{
h
i
g
h
}
]
 
i
s
 
s
o
r
t
e
d
.
`
 
}
)
;


 
 
 
 
 
 
i
f
 
(
a
r
r
[
m
i
d
]
 
<
 
t
a
r
g
e
t
 
&
&
 
t
a
r
g
e
t
 
<
=
 
a
r
r
[
h
i
g
h
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
{
 
l
i
n
e
:
 
9
,
 
v
a
r
s
:
 
{
 
m
i
d
,
 
h
i
g
h
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
S
h
e
l
l
(
n
,
 
m
i
d
 
+
 
1
,
 
h
i
g
h
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
w
:
 
m
i
d
 
+
 
1
,
 
h
i
g
h
 
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
T
a
r
g
e
t
 
i
n
 
s
o
r
t
e
d
 
r
i
g
h
t
:
 
l
o
w
 
<
-
 
$
{
m
i
d
 
+
 
1
}
`
 
}
)
;


 
 
 
 
 
 
 
 
l
o
w
 
=
 
m
i
d
 
+
 
1
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
{
 
l
i
n
e
:
 
1
0
,
 
v
a
r
s
:
 
{
 
l
o
w
,
 
m
i
d
,
 
t
a
r
g
e
t
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
S
h
e
l
l
(
n
,
 
l
o
w
,
 
m
i
d
 
-
 
1
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
w
,
 
h
i
g
h
:
 
m
i
d
 
-
 
1
 
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
T
a
r
g
e
t
 
n
o
t
 
i
n
 
r
i
g
h
t
 
h
a
l
f
.
 
S
e
a
r
c
h
 
l
e
f
t
:
 
h
i
g
h
 
<
-
 
$
{
m
i
d
 
-
 
1
}
`
 
}
)
;


 
 
 
 
 
 
 
 
h
i
g
h
 
=
 
m
i
d
 
-
 
1
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
{
 
l
i
n
e
:
 
1
2
,
 
v
a
r
s
:
 
{
 
t
a
r
g
e
t
,
 
f
o
u
n
d
:
 
-
1
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,
 
s
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
)
 
=
>
 
"
v
i
s
i
t
e
d
"
 
a
s
 
C
e
l
l
S
t
a
t
e
)
,
 
p
o
i
n
t
e
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
N
o
t
 
f
o
u
n
d
.
 
R
e
t
u
r
n
 
-
1
.
`
 
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
I
n
p
u
t
s
(
s
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
 
a
r
r
:
 
n
u
m
b
e
r
[
]
;
 
t
a
r
g
e
t
:
 
n
u
m
b
e
r
 
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
 
p
a
r
t
s
 
=
 
s
.
s
p
l
i
t
(
/
[
|
;
]
/
)
;


 
 
i
f
 
(
p
a
r
t
s
.
l
e
n
g
t
h
 
!
=
=
 
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
 
a
r
r
 
=
 
p
a
r
t
s
[
0
]
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
.
m
a
p
(
(
x
)
 
=
>
 
N
u
m
b
e
r
(
x
.
t
r
i
m
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
 
t
a
r
g
e
t
 
=
 
N
u
m
b
e
r
(
p
a
r
t
s
[
1
]
.
t
r
i
m
(
)
)
;


 
 
i
f
 
(
a
r
r
.
s
o
m
e
(
(
n
)
 
=
>
 
N
u
m
b
e
r
.
i
s
N
a
N
(
n
)
)
 
|
|
 
N
u
m
b
e
r
.
i
s
N
a
N
(
t
a
r
g
e
t
)
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


 
 
i
f
 
(
a
r
r
.
l
e
n
g
t
h
 
<
 
2
 
|
|
 
a
r
r
.
l
e
n
g
t
h
 
>
 
1
5
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


 
 
r
e
t
u
r
n
 
{
 
a
r
r
,
 
t
a
r
g
e
t
 
}
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
v
a
r
i
a
n
t
,
 
s
e
t
V
a
r
i
a
n
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
V
a
r
i
a
n
t
>
(
"
b
a
s
i
c
"
)
;


 
 
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
1
,
 
3
,
 
5
,
 
7
,
 
9
,
 
1
1
,
 
1
3
,
 
1
5
 
|
 
9
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
I
n
p
u
t
s
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
 
?
?
 
{
 
a
r
r
:
 
[
1
,
 
3
,
 
5
,
 
7
,
 
9
,
 
1
1
,
 
1
3
,
 
1
5
]
,
 
t
a
r
g
e
t
:
 
9
 
}
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
,


 
 
)
;


 
 
c
o
n
s
t
 
a
r
r
 
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
 
(
v
a
r
i
a
n
t
 
=
=
=
 
"
r
o
t
a
t
e
d
"
 
?
 
p
a
r
s
e
d
.
a
r
r
 
:
 
[
.
.
.
p
a
r
s
e
d
.
a
r
r
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
 
-
 
b
)
)
,


 
 
 
 
[
v
a
r
i
a
n
t
,
 
p
a
r
s
e
d
.
a
r
r
]
,


 
 
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
 
{


 
 
 
 
i
f
 
(
v
a
r
i
a
n
t
 
=
=
=
 
"
b
a
s
i
c
"
)
 
r
e
t
u
r
n
 
b
u
i
l
d
B
a
s
i
c
(
a
r
r
,
 
p
a
r
s
e
d
.
t
a
r
g
e
t
)
;


 
 
 
 
i
f
 
(
v
a
r
i
a
n
t
 
=
=
=
 
"
l
o
w
e
r
"
)
 
r
e
t
u
r
n
 
b
u
i
l
d
L
o
w
e
r
U
p
p
e
r
(
a
r
r
,
 
p
a
r
s
e
d
.
t
a
r
g
e
t
,
 
f
a
l
s
e
)
;


 
 
 
 
i
f
 
(
v
a
r
i
a
n
t
 
=
=
=
 
"
u
p
p
e
r
"
)
 
r
e
t
u
r
n
 
b
u
i
l
d
L
o
w
e
r
U
p
p
e
r
(
a
r
r
,
 
p
a
r
s
e
d
.
t
a
r
g
e
t
,
 
t
r
u
e
)
;


 
 
 
 
r
e
t
u
r
n
 
b
u
i
l
d
R
o
t
a
t
e
d
(
a
r
r
,
 
p
a
r
s
e
d
.
t
a
r
g
e
t
)
;


 
 
}
,
 
[
v
a
r
i
a
n
t
,
 
a
r
r
,
 
p
a
r
s
e
d
.
t
a
r
g
e
t
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
 
P
S
E
U
D
O
 
=


 
 
 
 
v
a
r
i
a
n
t
 
=
=
=
 
"
b
a
s
i
c
"


 
 
 
 
 
 
?
 
P
S
E
U
D
O
_
B
A
S
I
C


 
 
 
 
 
 
:
 
v
a
r
i
a
n
t
 
=
=
=
 
"
l
o
w
e
r
"


 
 
 
 
 
 
 
 
?
 
P
S
E
U
D
O
_
L
O
W
E
R


 
 
 
 
 
 
 
 
:
 
v
a
r
i
a
n
t
 
=
=
=
 
"
u
p
p
e
r
"


 
 
 
 
 
 
 
 
 
 
?
 
P
S
E
U
D
O
_
U
P
P
E
R


 
 
 
 
 
 
 
 
 
 
:
 
P
S
E
U
D
O
_
R
O
T
A
T
E
D
;




 
 
c
o
n
s
t
 
p
r
e
s
e
t
s
 
=


 
 
 
 
v
a
r
i
a
n
t
 
=
=
=
 
"
r
o
t
a
t
e
d
"


 
 
 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
R
o
t
a
t
e
d
 
1
"
,
 
v
a
l
u
e
:
 
"
4
,
 
5
,
 
6
,
 
7
,
 
0
,
 
1
,
 
2
 
|
 
0
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
R
o
t
a
t
e
d
 
2
"
,
 
v
a
l
u
e
:
 
"
6
,
 
7
,
 
1
,
 
2
,
 
3
,
 
4
,
 
5
 
|
 
3
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
N
o
t
 
r
o
t
a
t
e
d
"
,
 
v
a
l
u
e
:
 
"
1
,
 
2
,
 
3
,
 
4
,
 
5
,
 
6
,
 
7
 
|
 
5
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
N
o
t
 
f
o
u
n
d
"
,
 
v
a
l
u
e
:
 
"
4
,
 
5
,
 
6
,
 
7
,
 
0
,
 
1
,
 
2
 
|
 
9
"
 
}
,


 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
:
 
[


 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
F
o
u
n
d
 
m
i
d
d
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
1
,
 
3
,
 
5
,
 
7
,
 
9
,
 
1
1
,
 
1
3
,
 
1
5
 
|
 
9
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
F
o
u
n
d
 
e
d
g
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
1
,
 
3
,
 
5
,
 
7
,
 
9
,
 
1
1
,
 
1
3
,
 
1
5
 
|
 
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
N
o
t
 
f
o
u
n
d
"
,
 
v
a
l
u
e
:
 
"
1
,
 
3
,
 
5
,
 
7
,
 
9
,
 
1
1
,
 
1
3
,
 
1
5
 
|
 
8
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
D
u
p
l
i
c
a
t
e
s
"
,
 
v
a
l
u
e
:
 
"
1
,
 
2
,
 
2
,
 
2
,
 
3
,
 
4
 
|
 
2
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
3
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
 
g
a
p
-
1
.
5
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
{
(
[
"
b
a
s
i
c
"
,
 
"
l
o
w
e
r
"
,
 
"
u
p
p
e
r
"
,
 
"
r
o
t
a
t
e
d
"
]
 
a
s
 
c
o
n
s
t
)
.
m
a
p
(
(
v
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
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
v
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
 
s
e
t
V
a
r
i
a
n
t
(
v
)
}
 
a
c
t
i
v
e
=
{
v
a
r
i
a
n
t
 
=
=
=
 
v
}
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
x
s
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
 
=
=
=
 
"
b
a
s
i
c
"
 
?
 
"
B
a
s
i
c
"
 
:
 
v
 
=
=
=
 
"
l
o
w
e
r
"
 
?
 
"
L
o
w
e
r
 
B
o
u
n
d
"
 
:
 
v
 
=
=
=
 
"
u
p
p
e
r
"
 
?
 
"
U
p
p
e
r
 
B
o
u
n
d
"
 
:
 
"
R
o
t
a
t
e
d
"
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
P
i
l
l
B
u
t
t
o
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
B
i
n
a
r
y
 
S
e
a
r
c
h
 
-
 
$
{
v
a
r
i
a
n
t
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
A
r
r
a
y
 
|
 
T
a
r
g
e
t
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
e
.
g
.
 
1
,
 
3
,
 
5
,
 
7
,
 
9
 
|
 
7
"


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
 
=
=
=
 
"
r
o
t
a
t
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
R
o
t
a
t
e
d
 
s
o
r
t
e
d
 
a
r
r
a
y
.
 
T
a
r
g
e
t
 
c
a
n
 
b
e
 
a
n
y
w
h
e
r
e
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
A
r
r
a
y
 
i
s
 
a
u
t
o
-
s
o
r
t
e
d
.
 
F
o
r
m
a
t
:
 
n
u
m
b
e
r
s
 
|
 
t
a
r
g
e
t
"


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
p
r
e
s
e
t
s
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
I
n
p
u
t
s
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
h
i
g
h
l
i
g
h
t
K
e
y
 
?
 
[
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
K
e
y
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
A
r
r
a
y
B
a
r
s


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
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
l
u
e
s
 
?
?
 
a
r
r
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
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
s
t
a
t
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
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
p
o
i
n
t
e
r
s
}


 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
1
8
0
}


 
 
 
 
 
 
 
 
 
 
/
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
 
s
t
e
p
 
t
h
r
o
u
g
h
 
t
h
e
 
a
l
g
o
r
i
t
h
m
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
 
v
a
r
i
a
n
t
s
 
=
 
[


 
 
 
 
{
 
t
:
 
"
B
a
s
i
c
 
s
e
a
r
c
h
"
,
 
b
:
 
"
R
e
t
u
r
n
s
 
i
n
d
e
x
 
o
f
 
t
a
r
g
e
t
,
 
o
r
 
-
1
 
i
f
 
a
b
s
e
n
t
.
 
W
o
r
k
s
 
o
n
 
a
n
y
 
s
o
r
t
e
d
 
a
r
r
a
y
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
L
o
w
e
r
 
b
o
u
n
d
"
,
 
b
:
 
"
F
i
r
s
t
 
i
n
d
e
x
 
i
 
w
h
e
r
e
 
A
[
i
]
 
>
=
 
t
a
r
g
e
t
.
 
U
s
e
f
u
l
 
f
o
r
 
'
w
h
e
r
e
 
d
o
 
I
 
i
n
s
e
r
t
 
x
 
t
o
 
k
e
e
p
 
s
o
r
t
e
d
?
'
"
 
}
,


 
 
 
 
{
 
t
:
 
"
U
p
p
e
r
 
b
o
u
n
d
"
,
 
b
:
 
"
F
i
r
s
t
 
i
n
d
e
x
 
i
 
w
h
e
r
e
 
A
[
i
]
 
>
 
t
a
r
g
e
t
.
 
C
o
m
b
i
n
e
d
 
w
i
t
h
 
l
o
w
e
r
 
b
o
u
n
d
 
y
o
u
 
g
e
t
 
c
o
u
n
t
 
o
f
 
d
u
p
l
i
c
a
t
e
s
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
R
o
t
a
t
e
d
 
s
o
r
t
e
d
"
,
 
b
:
 
"
S
o
r
t
e
d
 
a
r
r
a
y
 
r
o
t
a
t
e
d
 
a
t
 
s
o
m
e
 
p
i
v
o
t
.
 
H
a
l
f
 
i
s
 
s
t
i
l
l
 
s
o
r
t
e
d
:
 
c
h
e
c
k
 
w
h
i
c
h
 
h
a
l
f
,
 
t
h
e
n
 
a
p
p
l
y
 
b
a
s
i
c
 
l
o
g
i
c
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
H
a
l
v
e
 
t
h
e
 
s
e
a
r
c
h
 
s
p
a
c
e
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
E
a
c
h
 
s
t
e
p
 
t
h
r
o
w
s
 
a
w
a
y
 
h
a
l
f
 
t
h
e
 
c
a
n
d
i
d
a
t
e
s
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


 
 
 
 
 
 
 
 
 
 
L
o
o
k
i
n
g
 
u
p
 
a
 
w
o
r
d
 
i
n
 
a
 
p
r
i
n
t
e
d
 
d
i
c
t
i
o
n
a
r
y
:
 
o
p
e
n
 
n
e
a
r
 
t
h
e
 
m
i
d
d
l
e
,
 
d
e
c
i
d
e
 
w
h
e
t
h
e
r
 
y
o
u
r
 
w
o
r
d


 
 
 
 
 
 
 
 
 
 
i
s
 
t
o
 
t
h
e
 
l
e
f
t
 
o
r
 
r
i
g
h
t
,
 
a
n
d
 
r
e
p
e
a
t
.
 
E
a
c
h
 
s
t
e
p
 
t
h
r
o
w
s
 
a
w
a
y
 
h
a
l
f
 
t
h
e
 
r
e
m
a
i
n
i
n
g
 
p
a
g
e
s
.


 
 
 
 
 
 
 
 
 
 
O
n
 
a
 
s
o
r
t
e
d
 
a
r
r
a
y
,
 
l
o
o
k
 
a
t
 
t
h
e
 
m
i
d
d
l
e
.
 
I
f
 
i
t
 
i
s
 
t
h
e
 
t
a
r
g
e
t
,
 
d
o
n
e
.
 
I
f
 
t
h
e
 
m
i
d
d
l
e
 
i
s
 
t
o
o


 
 
 
 
 
 
 
 
 
 
s
m
a
l
l
,
 
t
h
e
 
t
a
r
g
e
t
 
l
i
v
e
s
 
s
t
r
i
c
t
l
y
 
t
o
 
t
h
e
 
r
i
g
h
t
;
 
i
f
 
t
o
o
 
b
i
g
,
 
s
t
r
i
c
t
l
y
 
t
o
 
t
h
e
 
l
e
f
t
.
 
E
a
c
h
 
s
t
e
p


 
 
 
 
 
 
 
 
 
 
h
a
l
v
e
s
 
t
h
e
 
s
e
a
r
c
h
 
r
e
g
i
o
n
,
 
g
i
v
i
n
g
 
O
(
l
o
g
 
n
)
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
v
a
r
i
a
n
t
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
 
m
b
-
1
 
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
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
O
v
e
r
f
l
o
w
 
t
r
i
c
k
:
<
/
s
t
r
o
n
g
>
 
<
I
n
l
i
n
e
C
o
d
e
>
m
i
d
 
=
 
(
l
o
w
 
+
 
h
i
g
h
)
 
/
 
2
<
/
I
n
l
i
n
e
C
o
d
e
>
 
c
a
n


 
 
 
 
 
 
 
 
o
v
e
r
f
l
o
w
 
i
n
 
l
a
n
g
u
a
g
e
s
 
w
i
t
h
 
f
i
x
e
d
-
s
i
z
e
 
i
n
t
s
.
 
U
s
e
{
"
 
"
}


 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
m
i
d
 
=
 
l
o
w
 
+
 
(
h
i
g
h
 
-
 
l
o
w
)
 
/
 
2
<
/
I
n
l
i
n
e
C
o
d
e
>
 
i
n
s
t
e
a
d
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


 
 
c
o
n
s
t
 
p
r
o
b
l
e
m
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
M
a
x
 
c
o
m
p
a
r
i
s
o
n
s
 
f
o
r
 
b
i
n
a
r
y
 
s
e
a
r
c
h
 
o
n
 
n
=
1
0
0
0
?
"
,
 
a
n
s
w
e
r
:
 
"
1
0
"
 
}
,


 
 
 
 
{
 
q
:
 
"
l
o
w
e
r
B
o
u
n
d
(
[
1
,
2
,
2
,
2
,
3
,
4
]
,
 
2
)
 
r
e
t
u
r
n
s
?
"
,
 
a
n
s
w
e
r
:
 
"
1
"
 
}
,


 
 
 
 
{
 
q
:
 
"
u
p
p
e
r
B
o
u
n
d
(
[
1
,
2
,
2
,
2
,
3
,
4
]
,
 
2
)
 
r
e
t
u
r
n
s
?
"
,
 
a
n
s
w
e
r
:
 
"
4
"
 
}
,


 
 
 
 
{
 
q
:
 
"
S
e
a
r
c
h
 
0
 
i
n
 
r
o
t
a
t
e
d
 
[
4
,
5
,
6
,
7
,
0
,
1
,
2
]
 
-
 
i
n
d
e
x
?
"
,
 
a
n
s
w
e
r
:
 
"
4
"
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
[
g
u
e
s
s
e
s
,
 
s
e
t
G
u
e
s
s
e
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
(
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
)
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
n
u
l
l
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
h
o
w
n
,
 
s
e
t
S
h
o
w
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
<
b
o
o
l
e
a
n
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
f
a
l
s
e
)
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


 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
H
i
n
t
:
<
/
s
t
r
o
n
g
>
 
c
e
i
l
(
l
o
g
2
 
n
)
 
i
s
 
t
h
e
 
w
o
r
s
t
-
c
a
s
e
 
c
o
m
p
a
r
i
s
o
n
s
.
 
C
o
u
n
t
 
o
f
 
x
 
i
n
 
s
o
r
t
e
d


 
 
 
 
 
 
 
 
a
r
r
a
y
 
=
 
u
p
p
e
r
(
x
)
 
-
 
l
o
w
e
r
(
x
)
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
p
r
o
b
l
e
m
s
.
m
a
p
(
(
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
 
g
 
=
 
g
u
e
s
s
e
s
[
i
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
v
e
a
l
e
d
 
=
 
s
h
o
w
n
[
i
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
 
=
 
g
 
!
=
=
 
n
u
l
l
 
&
&
 
g
.
t
r
i
m
(
)
 
=
=
=
 
p
.
a
n
s
w
e
r
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
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
5
2
 
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
"
>
{
p
.
q
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
 
?
?
 
"
"
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
g
u
e
s
s
e
s
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
[
i
]
 
=
 
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
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
G
u
e
s
s
e
s
(
v
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
w
-
2
4
 
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
5
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
?
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
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
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
s
h
o
w
n
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
[
i
]
 
=
 
t
r
u
e
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
h
o
w
n
(
v
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
e
d
i
u
m
 
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
s
t
o
n
e
-
5
0
0
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
v
e
a
l
e
d
 
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
{
`
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
b
o
l
d
 
p
x
-
3
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
r
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
/
1
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
g
-
r
o
s
e
-
5
0
0
/
1
0
 
t
e
x
t
-
r
o
s
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
r
o
s
e
-
3
0
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
r
o
s
e
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
c
o
r
r
e
c
t
 
?
 
`
C
o
r
r
e
c
t
 
-
 
$
{
p
.
a
n
s
w
e
r
}
`
 
:
 
`
A
n
s
w
e
r
:
 
$
{
p
.
a
n
s
w
e
r
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
B
i
n
a
r
y
 
s
e
a
r
c
h
 
b
e
y
o
n
d
 
a
r
r
a
y
s
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


 
 
 
 
 
 
 
 
 
 
A
n
y
 
m
o
n
o
t
o
n
i
c
 
p
r
e
d
i
c
a
t
e
 
o
v
e
r
 
a
n
 
o
r
d
e
r
e
d
 
d
o
m
a
i
n
 
i
s
 
b
i
n
a
r
y
-
s
e
a
r
c
h
a
b
l
e
:
 
"
i
s
 
t
h
i
s
 
w
o
r
k
l
o
a
d


 
 
 
 
 
 
 
 
 
 
f
e
a
s
i
b
l
e
 
i
n
 
t
i
m
e
 
t
?
"
,
 
"
c
a
n
 
w
e
 
f
i
t
 
i
t
e
m
s
 
i
n
 
k
 
b
o
x
e
s
?
"
.
 
T
h
i
s
 
p
a
t
t
e
r
n
,
 
"
b
i
n
a
r
y
 
s
e
a
r
c
h
 
o
n
 
t
h
e


 
 
 
 
 
 
 
 
 
 
a
n
s
w
e
r
"
,
 
s
h
o
w
s
 
u
p
 
i
n
 
o
p
t
i
m
i
z
a
t
i
o
n
 
p
r
o
b
l
e
m
s
 
c
o
n
s
t
a
n
t
l
y
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
L
o
o
p
 
i
n
v
a
r
i
a
n
t
s
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


 
 
 
 
 
 
 
 
 
 
L
o
w
e
r
 
b
o
u
n
d
 
m
a
i
n
t
a
i
n
s
:
 
t
h
e
 
a
n
s
w
e
r
 
i
s
 
i
n
 
[
l
o
w
,
 
h
i
g
h
]
.
 
W
i
n
d
o
w
 
a
l
w
a
y
s
 
s
h
r
i
n
k
s
;
 
w
e
 
s
t
o
p
 
w
h
e
n


 
 
 
 
 
 
 
 
 
 
l
o
w
 
=
 
h
i
g
h
.
 
G
e
t
t
i
n
g
 
"
&
l
t
;
"
 
v
s
 
"
&
l
t
;
=
"
 
r
i
g
h
t
,
 
a
n
d
 
w
h
i
c
h
 
p
o
i
n
t
e
r
 
m
o
v
e
s
,
 
i
s
 
t
h
e
 
s
o
u
r
c
e
 
o
f
 
9
9
%


 
 
 
 
 
 
 
 
 
 
o
f
 
b
u
g
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
 
h
o
o
k
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
C
o
m
p
a
r
i
s
o
n
s
 
i
n
 
w
o
r
s
t
 
c
a
s
e
:
 
c
e
i
l
(
l
o
g
2
(
n
+
1
)
)
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
F
a
i
l
s
 
o
n
 
u
n
s
o
r
t
e
d
 
i
n
p
u
t
;
 
p
r
e
r
e
q
u
i
s
i
t
e
 
i
s
 
m
o
n
o
t
o
n
i
c
 
o
r
d
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


 
 
 
 
 
 
 
 
 
 
 
 
R
o
t
a
t
e
d
 
b
i
n
a
r
y
 
s
e
a
r
c
h
 
r
u
n
s
 
i
n
 
O
(
l
o
g
 
n
)
 
w
h
e
n
 
a
l
l
 
e
l
e
m
e
n
t
s
 
a
r
e
 
d
i
s
t
i
n
c
t
;
 
O
(
n
)
 
w
o
r
s
t
 
c
a
s
e


 
 
 
 
 
 
 
 
 
 
 
 
w
i
t
h
 
d
u
p
l
i
c
a
t
e
s
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
S
t
a
n
d
a
r
d
 
l
i
b
r
a
r
y
 
m
a
p
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


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
P
y
t
h
o
n
 
<
I
n
l
i
n
e
C
o
d
e
>
b
i
s
e
c
t
<
/
I
n
l
i
n
e
C
o
d
e
>
:
<
/
s
t
r
o
n
g
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
b
i
s
e
c
t
.
b
i
s
e
c
t
_
l
e
f
t
(
a
,
 
x
)
<
/
I
n
l
i
n
e
C
o
d
e
>
 
i
s
 
l
o
w
e
r
B
o
u
n
d
,
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
b
i
s
e
c
t
.
b
i
s
e
c
t
_
r
i
g
h
t
(
a
,
 
x
)
<
/
I
n
l
i
n
e
C
o
d
e
>
 
i
s
 
u
p
p
e
r
B
o
u
n
d
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


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
C
+
+
 
<
I
n
l
i
n
e
C
o
d
e
>
&
l
t
;
a
l
g
o
r
i
t
h
m
&
g
t
;
<
/
I
n
l
i
n
e
C
o
d
e
>
:
<
/
s
t
r
o
n
g
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
s
t
d
:
:
l
o
w
e
r
_
b
o
u
n
d
<
/
I
n
l
i
n
e
C
o
d
e
>
 
a
n
d
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
s
t
d
:
:
u
p
p
e
r
_
b
o
u
n
d
<
/
I
n
l
i
n
e
C
o
d
e
>
 
r
e
t
u
r
n
 
i
t
e
r
a
t
o
r
s
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


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
J
a
v
a
 
<
I
n
l
i
n
e
C
o
d
e
>
A
r
r
a
y
s
.
b
i
n
a
r
y
S
e
a
r
c
h
<
/
I
n
l
i
n
e
C
o
d
e
>
:
<
/
s
t
r
o
n
g
>
 
r
e
t
u
r
n
s
 
t
h
e
 
i
n
d
e
x
 
i
f


 
 
 
 
 
 
 
 
 
 
 
 
f
o
u
n
d
,
 
o
r
 
<
I
n
l
i
n
e
C
o
d
e
>
-
(
i
n
s
e
r
t
i
o
n
_
p
o
i
n
t
)
 
-
 
1
<
/
I
n
l
i
n
e
C
o
d
e
>
 
i
f
 
n
o
t
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


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
J
S
:
<
/
s
t
r
o
n
g
>
 
n
o
 
b
u
i
l
t
-
i
n
.
 
R
o
l
l
 
y
o
u
r
 
o
w
n
.
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
a
r
r
.
i
n
d
e
x
O
f
(
x
)
<
/
I
n
l
i
n
e
C
o
d
e
>
 
i
s
 
l
i
n
e
a
r
;
 
n
e
v
e
r
 
u
s
e
 
i
t
 
a
s
 
a
 
s
t
a
n
d
-
i
n
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
S
a
f
e
-
m
i
d
 
f
o
r
m
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


 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
(
l
o
w
 
+
 
h
i
g
h
)
 
/
 
2
<
/
I
n
l
i
n
e
C
o
d
e
>
 
c
a
n
 
o
v
e
r
f
l
o
w
 
w
h
e
n
 
b
o
t
h
 
a
r
e
 
n
e
a
r
 
I
N
T
_
M
A
X
.
 
T
h
e


 
 
 
 
 
 
 
 
 
 
f
a
m
o
u
s
 
J
a
v
a
 
b
u
g
 
i
n
 
<
I
n
l
i
n
e
C
o
d
e
>
A
r
r
a
y
s
.
b
i
n
a
r
y
S
e
a
r
c
h
<
/
I
n
l
i
n
e
C
o
d
e
>
 
w
a
s
 
c
a
u
s
e
d
 
b
y
 
e
x
a
c
t
l
y


 
 
 
 
 
 
 
 
 
 
t
h
i
s
.
 
A
l
w
a
y
s
 
w
r
i
t
e
 
<
I
n
l
i
n
e
C
o
d
e
>
l
o
w
 
+
 
(
h
i
g
h
 
-
 
l
o
w
)
 
/
 
2
<
/
I
n
l
i
n
e
C
o
d
e
>
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
5
_
B
i
n
a
r
y
S
e
a
r
c
h
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
M
a
x
i
m
u
m
 
n
u
m
b
e
r
 
o
f
 
c
o
m
p
a
r
i
s
o
n
s
 
f
o
r
 
b
i
n
a
r
y
 
s
e
a
r
c
h
 
o
n
 
a
 
s
o
r
t
e
d
 
a
r
r
a
y
 
o
f
 
1
,
0
0
0
,
0
0
0
 
e
l
e
m
e
n
t
s
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
0
"
,
 
"
2
0
"
,
 
"
1
0
0
"
,
 
"
1
0
0
0
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
c
e
i
l
(
l
o
g
2
(
1
0
^
6
)
)
 
i
s
 
a
p
p
r
o
x
i
m
a
t
e
l
y
 
2
0
.
 
E
v
e
r
y
 
s
t
e
p
 
h
a
l
v
e
s
 
t
h
e
 
s
e
a
r
c
h
 
s
p
a
c
e
,
 
s
o
 
a
b
o
u
t
 
2
0
 
h
a
l
v
i
n
g
s
 
s
u
f
f
i
c
e
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
F
o
r
 
s
o
r
t
e
d
 
a
r
r
a
y
 
[
1
,
 
2
,
 
2
,
 
2
,
 
3
,
 
4
]
,
 
w
h
a
t
 
d
o
e
s
 
l
o
w
e
r
B
o
u
n
d
(
2
)
 
r
e
t
u
r
n
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
0
"
,
 
"
1
"
,
 
"
3
"
,
 
"
4
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
L
o
w
e
r
 
b
o
u
n
d
 
=
 
s
m
a
l
l
e
s
t
 
i
n
d
e
x
 
i
 
w
i
t
h
 
A
[
i
]
 
>
=
 
2
,
 
w
h
i
c
h
 
i
s
 
i
n
d
e
x
 
1
 
(
t
h
e
 
f
i
r
s
t
 
2
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
C
o
u
n
t
 
o
f
 
x
 
i
n
 
a
 
s
o
r
t
e
d
 
a
r
r
a
y
 
e
q
u
a
l
s
:
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
u
p
p
e
r
(
x
)
 
+
 
l
o
w
e
r
(
x
)
"
,
 
"
u
p
p
e
r
(
x
)
 
-
 
l
o
w
e
r
(
x
)
"
,
 
"
l
o
w
e
r
(
x
)
 
-
 
1
"
,
 
"
n
 
-
 
u
p
p
e
r
(
x
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
L
o
w
e
r
 
b
o
u
n
d
 
i
s
 
f
i
r
s
t
 
>
=
 
x
;
 
u
p
p
e
r
 
b
o
u
n
d
 
i
s
 
f
i
r
s
t
 
>
 
x
.
 
T
h
e
 
d
i
f
f
e
r
e
n
c
e
 
i
s
 
t
h
e
 
n
u
m
b
e
r
 
o
f
 
x
'
s
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
I
n
 
t
h
e
 
r
o
t
a
t
e
d
 
s
o
r
t
e
d
 
a
r
r
a
y
 
[
4
,
 
5
,
 
6
,
 
7
,
 
0
,
 
1
,
 
2
]
,
 
s
e
a
r
c
h
i
n
g
 
f
o
r
 
0
 
w
i
t
h
 
s
t
a
n
d
a
r
d
 
r
o
t
a
t
e
d
 
b
i
n
a
r
y
 
s
e
a
r
c
h
 
t
a
k
e
s
:
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
1
)
"
,
 
"
O
(
l
o
g
 
n
)
"
,
 
"
O
(
n
)
"
,
 
"
O
(
n
 
l
o
g
 
n
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
A
t
 
e
a
c
h
 
s
t
e
p
 
w
e
 
i
d
e
n
t
i
f
y
 
w
h
i
c
h
 
h
a
l
f
 
i
s
 
s
o
r
t
e
d
,
 
d
e
c
i
d
e
 
t
a
r
g
e
t
'
s
 
s
i
d
e
,
 
a
n
d
 
s
h
r
i
n
k
 
b
y
 
h
a
l
f
.
 
O
(
l
o
g
 
n
)
 
w
i
t
h
 
d
i
s
t
i
n
c
t
 
e
l
e
m
e
n
t
s
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
B
i
n
a
r
y
 
S
e
a
r
c
h
 
&
 
V
a
r
i
a
n
t
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
5
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
6
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
A
m
o
n
g
 
t
h
e
 
m
o
s
t
-
a
s
k
e
d
 
t
o
p
i
c
s
:
 
v
a
r
i
a
n
t
s
 
a
n
d
 
'
B
S
 
o
n
 
a
n
s
w
e
r
'
 
p
r
o
b
l
e
m
s
 
d
o
m
i
n
a
t
e
 
i
n
t
e
r
v
i
e
w
s
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
R
e
c
u
r
s
i
o
n
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


