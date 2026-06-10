
i
m
p
o
r
t
 
{
 
F
r
a
g
m
e
n
t
,
 
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
 
m
o
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
a
l
c
u
l
a
t
o
r
,
 
G
a
u
g
e
,
 
T
i
m
e
r
,
 
H
a
r
d
D
r
i
v
e
,
 
U
s
e
r
s
,
 
T
r
e
n
d
i
n
g
U
p
,


 
 
Z
a
p
,
 
S
e
r
v
e
r
,
 
N
e
t
w
o
r
k
,
 
G
l
o
b
e
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
 
E
n
g
i
n
e
e
r
i
n
g
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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
 
t
y
p
e
 
{
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
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
 
}
 
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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


 
 
S
D
,


 
 
S
D
_
S
O
F
T
,


 
 
M
O
N
O
,


 
 
s
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


 
 
s
e
c
t
i
o
n
D
e
s
c
,


 
 
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
,


 
 
c
a
r
d
E
n
t
r
a
n
c
e
,


 
 
c
a
r
d
H
o
v
e
r
,


}
 
f
r
o
m
 
"
.
/
_
s
h
a
r
e
d
/
s
t
y
l
e
s
"
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
F
o
r
m
a
t
 
h
e
l
p
e
r
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
 
f
o
r
m
a
t
N
u
m
(
n
:
 
n
u
m
b
e
r
)
:
 
s
t
r
i
n
g
 
{


 
 
i
f
 
(
n
 
>
=
 
1
e
1
2
)
 
r
e
t
u
r
n
 
(
n
 
/
 
1
e
1
2
)
.
t
o
F
i
x
e
d
(
1
)
 
+
 
"
 
T
"
;


 
 
i
f
 
(
n
 
>
=
 
1
e
9
)
 
r
e
t
u
r
n
 
(
n
 
/
 
1
e
9
)
.
t
o
F
i
x
e
d
(
1
)
 
+
 
"
 
B
"
;


 
 
i
f
 
(
n
 
>
=
 
1
e
6
)
 
r
e
t
u
r
n
 
(
n
 
/
 
1
e
6
)
.
t
o
F
i
x
e
d
(
1
)
 
+
 
"
 
M
"
;


 
 
i
f
 
(
n
 
>
=
 
1
e
3
)
 
r
e
t
u
r
n
 
(
n
 
/
 
1
e
3
)
.
t
o
F
i
x
e
d
(
1
)
 
+
 
"
 
K
"
;


 
 
r
e
t
u
r
n
 
n
.
t
o
F
i
x
e
d
(
0
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
 
f
o
r
m
a
t
B
y
t
e
s
(
b
:
 
n
u
m
b
e
r
)
:
 
s
t
r
i
n
g
 
{


 
 
i
f
 
(
b
 
>
=
 
1
e
1
5
)
 
r
e
t
u
r
n
 
(
b
 
/
 
1
e
1
5
)
.
t
o
F
i
x
e
d
(
1
)
 
+
 
"
 
P
B
"
;


 
 
i
f
 
(
b
 
>
=
 
1
e
1
2
)
 
r
e
t
u
r
n
 
(
b
 
/
 
1
e
1
2
)
.
t
o
F
i
x
e
d
(
1
)
 
+
 
"
 
T
B
"
;


 
 
i
f
 
(
b
 
>
=
 
1
e
9
)
 
r
e
t
u
r
n
 
(
b
 
/
 
1
e
9
)
.
t
o
F
i
x
e
d
(
1
)
 
+
 
"
 
G
B
"
;


 
 
i
f
 
(
b
 
>
=
 
1
e
6
)
 
r
e
t
u
r
n
 
(
b
 
/
 
1
e
6
)
.
t
o
F
i
x
e
d
(
1
)
 
+
 
"
 
M
B
"
;


 
 
i
f
 
(
b
 
>
=
 
1
e
3
)
 
r
e
t
u
r
n
 
(
b
 
/
 
1
e
3
)
.
t
o
F
i
x
e
d
(
1
)
 
+
 
"
 
K
B
"
;


 
 
r
e
t
u
r
n
 
b
.
t
o
F
i
x
e
d
(
0
)
 
+
 
"
 
B
"
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
I
n
t
e
r
a
c
t
i
v
e
 
c
a
l
c
u
l
a
t
o
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
 
S
l
i
d
e
r
C
o
n
t
r
o
l
(
{


 
 
l
a
b
e
l
,
 
v
a
l
u
e
,
 
o
n
C
h
a
n
g
e
,
 
m
i
n
,
 
m
a
x
,
 
s
t
e
p
,
 
f
o
r
m
a
t
,
 
u
n
i
t
,


}
:
 
{


 
 
l
a
b
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
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;
 
o
n
C
h
a
n
g
e
:
 
(
n
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


 
 
m
i
n
:
 
n
u
m
b
e
r
;
 
m
a
x
:
 
n
u
m
b
e
r
;
 
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


 
 
f
o
r
m
a
t
?
:
 
(
n
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
 
s
t
r
i
n
g
;
 
u
n
i
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
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
4
 
}
}
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
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
s
p
a
c
e
-
b
e
t
w
e
e
n
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
b
a
s
e
l
i
n
e
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
2
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
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
:
 
6
0
0
 
}
}
>
{
l
a
b
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
s
p
a
n
 
s
t
y
l
e
=
{
{
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
8
r
e
m
"
,
 
c
o
l
o
r
:
 
S
D
,
 
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
:
 
7
0
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
f
o
r
m
a
t
 
?
 
f
o
r
m
a
t
(
v
a
l
u
e
)
 
:
 
v
a
l
u
e
}
{
u
n
i
t
 
?
 
`
 
$
{
u
n
i
t
}
`
 
:
 
"
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
d
i
v
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
r
a
n
g
e
"
 
m
i
n
=
{
m
i
n
}
 
m
a
x
=
{
m
a
x
}
 
s
t
e
p
=
{
s
t
e
p
}
 
v
a
l
u
e
=
{
v
a
l
u
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
 
o
n
C
h
a
n
g
e
(
N
u
m
b
e
r
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
)
}


 
 
 
 
 
 
 
 
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
 
"
1
0
0
%
"
,
 
a
c
c
e
n
t
C
o
l
o
r
:
 
S
D
 
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
 
C
a
l
c
u
l
a
t
o
r
1
(
)
 
{


 
 
c
o
n
s
t
 
[
d
a
u
,
 
s
e
t
D
a
u
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
2
0
0
_
0
0
0
_
0
0
0
)
;


 
 
c
o
n
s
t
 
[
p
e
r
U
s
e
r
,
 
s
e
t
P
e
r
U
s
e
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
2
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
a
d
M
u
l
t
,
 
s
e
t
R
e
a
d
M
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
(
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
 
[
b
y
t
e
s
P
e
r
I
t
e
m
,
 
s
e
t
B
y
t
e
s
P
e
r
I
t
e
m
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
2
8
0
)
;


 
 
c
o
n
s
t
 
[
p
e
a
k
M
u
l
t
,
 
s
e
t
P
e
a
k
M
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
(
3
)
;




 
 
c
o
n
s
t
 
d
e
r
i
v
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
 
{


 
 
 
 
c
o
n
s
t
 
w
r
i
t
e
s
D
a
y
 
=
 
d
a
u
 
*
 
p
e
r
U
s
e
r
;


 
 
 
 
c
o
n
s
t
 
w
r
i
t
e
s
S
e
c
 
=
 
w
r
i
t
e
s
D
a
y
 
/
 
8
6
4
0
0
;


 
 
 
 
c
o
n
s
t
 
r
e
a
d
s
S
e
c
 
=
 
w
r
i
t
e
s
S
e
c
 
*
 
r
e
a
d
M
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
e
a
k
R
e
a
d
s
S
e
c
 
=
 
r
e
a
d
s
S
e
c
 
*
 
p
e
a
k
M
u
l
t
;


 
 
 
 
c
o
n
s
t
 
s
t
o
r
a
g
e
D
a
y
 
=
 
w
r
i
t
e
s
D
a
y
 
*
 
b
y
t
e
s
P
e
r
I
t
e
m
;


 
 
 
 
c
o
n
s
t
 
s
t
o
r
a
g
e
Y
r
 
=
 
s
t
o
r
a
g
e
D
a
y
 
*
 
3
6
5
;


 
 
 
 
r
e
t
u
r
n
 
{
 
w
r
i
t
e
s
D
a
y
,
 
w
r
i
t
e
s
S
e
c
,
 
r
e
a
d
s
S
e
c
,
 
p
e
a
k
R
e
a
d
s
S
e
c
,
 
s
t
o
r
a
g
e
D
a
y
,
 
s
t
o
r
a
g
e
Y
r
 
}
;


 
 
}
,
 
[
d
a
u
,
 
p
e
r
U
s
e
r
,
 
r
e
a
d
M
u
l
t
,
 
b
y
t
e
s
P
e
r
I
t
e
m
,
 
p
e
a
k
M
u
l
t
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
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
T
u
r
n
 
&
l
d
q
u
o
;
a
 
l
o
t
 
o
f
 
u
s
e
r
s
&
r
d
q
u
o
;
 
i
n
t
o
 
n
u
m
b
e
r
s
 
y
o
u
 
c
a
n
 
d
e
f
e
n
d
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
E
v
e
r
y
 
H
L
D
 
s
t
a
r
t
s
 
w
i
t
h
 
t
h
e
s
e
 
f
i
v
e
 
n
u
m
b
e
r
s
.
 
M
o
v
e
 
t
h
e
 
s
l
i
d
e
r
s
 
b
e
l
o
w
 
-
 
w
a
t
c
h
 
h
o
w
 
s
t
o
r
a
g
e
 
a
n
d


 
 
 
 
 
 
 
 
Q
P
S
 
s
h
i
f
t
.
 
I
n
 
a
 
r
e
a
l
 
i
n
t
e
r
v
i
e
w
 
y
o
u
&
r
s
q
u
o
;
d
 
w
r
i
t
e
 
t
h
i
s
 
m
a
t
h
 
o
n
 
t
h
e
 
w
h
i
t
e
b
o
a
r
d
 
i
n
 
u
n
d
e
r
 
5


 
 
 
 
 
 
 
 
m
i
n
u
t
e
s
.


 
 
 
 
 
 
<
/
p
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
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
1
f
r
 
1
f
r
"
,
 
g
a
p
:
 
1
6
 
}
}
>


 
 
 
 
 
 
 
 
{
/
*
 
I
N
P
U
T
S
 
*
/
}


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
8
p
x
 
2
0
p
x
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
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
-
s
u
b
t
l
e
)
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
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
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
I
N
P
U
T
S
 
·
 
T
H
I
N
G
S
 
Y
O
U
 
C
L
A
R
I
F
Y
 
W
I
T
H
 
T
H
E
 
P
M


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
S
l
i
d
e
r
C
o
n
t
r
o
l


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
D
a
i
l
y
 
A
c
t
i
v
e
 
U
s
e
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
d
a
u
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
s
e
t
D
a
u
}


 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
1
0
0
0
0
}
 
m
a
x
=
{
1
_
0
0
0
_
0
0
0
_
0
0
0
}
 
s
t
e
p
=
{
1
0
0
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
f
o
r
m
a
t
=
{
f
o
r
m
a
t
N
u
m
}
 
u
n
i
t
=
"
D
A
U
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
l
i
d
e
r
C
o
n
t
r
o
l


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
W
r
i
t
e
s
 
p
e
r
 
u
s
e
r
 
p
e
r
 
d
a
y
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
p
e
r
U
s
e
r
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
s
e
t
P
e
r
U
s
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
1
}
 
m
a
x
=
{
5
0
}
 
s
t
e
p
=
{
1
}
 
u
n
i
t
=
"
×
 
/
 
d
a
y
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
l
i
d
e
r
C
o
n
t
r
o
l


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
R
e
a
d
 
/
 
W
r
i
t
e
 
r
a
t
i
o
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
r
e
a
d
M
u
l
t
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
s
e
t
R
e
a
d
M
u
l
t
}


 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
1
}
 
m
a
x
=
{
5
0
0
}
 
s
t
e
p
=
{
1
}
 
u
n
i
t
=
"
×
 
r
e
a
d
s
 
p
e
r
 
w
r
i
t
e
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
l
i
d
e
r
C
o
n
t
r
o
l


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
B
y
t
e
s
 
p
e
r
 
i
t
e
m
 
(
t
w
e
e
t
,
 
p
o
s
t
,
 
e
v
e
n
t
)
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
b
y
t
e
s
P
e
r
I
t
e
m
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
s
e
t
B
y
t
e
s
P
e
r
I
t
e
m
}


 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
1
0
0
}
 
m
a
x
=
{
1
0
0
0
0
}
 
s
t
e
p
=
{
5
0
}


 
 
 
 
 
 
 
 
 
 
 
 
f
o
r
m
a
t
=
{
f
o
r
m
a
t
B
y
t
e
s
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
l
i
d
e
r
C
o
n
t
r
o
l


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
P
e
a
k
 
/
 
A
v
e
r
a
g
e
 
m
u
l
t
i
p
l
i
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
p
e
a
k
M
u
l
t
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
s
e
t
P
e
a
k
M
u
l
t
}


 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
1
}
 
m
a
x
=
{
1
0
}
 
s
t
e
p
=
{
0
.
5
}
 
u
n
i
t
=
"
×
"


 
 
 
 
 
 
 
 
 
 
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
 
O
U
T
P
U
T
S
 
*
/
}


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
8
p
x
 
2
0
p
x
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
:
 
S
D
_
S
O
F
T
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
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
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
O
U
T
P
U
T
S
 
·
 
W
H
A
T
 
Y
O
U
 
W
R
I
T
E
 
O
N
 
T
H
E
 
B
O
A
R
D


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
<
T
r
e
n
d
i
n
g
U
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
 
l
a
b
e
l
:
 
"
W
r
i
t
e
s
 
/
 
d
a
y
"
,
 
v
a
l
:
 
f
o
r
m
a
t
N
u
m
(
d
e
r
i
v
e
d
.
w
r
i
t
e
s
D
a
y
)
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
<
G
a
u
g
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
"
 
/
>
,
 
l
a
b
e
l
:
 
"
W
r
i
t
e
s
 
/
 
s
e
c
 
(
a
v
g
)
"
,
 
v
a
l
:
 
f
o
r
m
a
t
N
u
m
(
d
e
r
i
v
e
d
.
w
r
i
t
e
s
S
e
c
)
 
+
 
"
 
Q
P
S
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
<
G
a
u
g
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
"
 
/
>
,
 
l
a
b
e
l
:
 
"
R
e
a
d
s
 
/
 
s
e
c
 
(
a
v
g
)
"
,
 
v
a
l
:
 
f
o
r
m
a
t
N
u
m
(
d
e
r
i
v
e
d
.
r
e
a
d
s
S
e
c
)
 
+
 
"
 
Q
P
S
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
<
Z
a
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
 
l
a
b
e
l
:
 
"
P
e
a
k
 
r
e
a
d
s
 
/
 
s
e
c
"
,
 
v
a
l
:
 
f
o
r
m
a
t
N
u
m
(
d
e
r
i
v
e
d
.
p
e
a
k
R
e
a
d
s
S
e
c
)
 
+
 
"
 
Q
P
S
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
<
H
a
r
d
D
r
i
v
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
"
 
/
>
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
o
r
a
g
e
 
/
 
d
a
y
"
,
 
v
a
l
:
 
f
o
r
m
a
t
B
y
t
e
s
(
d
e
r
i
v
e
d
.
s
t
o
r
a
g
e
D
a
y
)
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
<
H
a
r
d
D
r
i
v
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
"
 
/
>
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
o
r
a
g
e
 
/
 
y
e
a
r
"
,
 
v
a
l
:
 
f
o
r
m
a
t
B
y
t
e
s
(
d
e
r
i
v
e
d
.
s
t
o
r
a
g
e
Y
r
)
 
}
,


 
 
 
 
 
 
 
 
 
 
]
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


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
r
.
l
a
b
e
l
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
f
l
e
x
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
s
p
a
c
e
-
b
e
t
w
e
e
n
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
0
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
"
1
p
x
 
d
a
s
h
e
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
8
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
{
r
.
i
c
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
l
a
b
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
s
p
a
n
 
s
t
y
l
e
=
{
{
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
5
r
e
m
"
,
 
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
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
v
a
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


 
 
 
 
 
 
 
 
 
 
)
)
}




 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
T
o
p
:
 
1
4
,
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
2
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
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
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
)
"
,
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
S
D
}
4
0
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
,
 
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
:
 
7
0
0
 
}
}
>
r
u
l
e
 
o
f
 
t
h
u
m
b
:
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
1
 
d
a
y
 
≈
 
8
6
,
4
0
0
 
s
e
c
o
n
d
s
 
≈
 
1
0
<
s
u
p
>
5
<
/
s
u
p
>
.
 
M
e
m
o
r
i
z
e
 
i
t
 
-
 
y
o
u
&
r
s
q
u
o
;
l
l
 
d
i
v
i
d
e
 
b
y
 
i
t
 
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
L
a
t
e
n
c
y
 
n
u
m
b
e
r
s
 
e
v
e
r
y
 
e
n
g
i
n
e
e
r
 
m
u
s
t
 
k
n
o
w
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
 
L
a
t
e
n
c
y
R
o
w
 
{


 
 
o
p
:
 
s
t
r
i
n
g
;


 
 
n
s
:
 
n
u
m
b
e
r
;


 
 
i
c
o
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


 
 
n
o
t
e
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
 
L
A
T
E
N
C
I
E
S
:
 
L
a
t
e
n
c
y
R
o
w
[
]
 
=
 
[


 
 
{
 
o
p
:
 
"
L
1
 
c
a
c
h
e
 
r
e
f
e
r
e
n
c
e
"
,
 
n
s
:
 
0
.
5
,
 
i
c
o
n
:
 
<
Z
a
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
 
n
o
t
e
:
 
"
C
P
U
-
i
n
t
e
r
n
a
l
,
 
e
s
s
e
n
t
i
a
l
l
y
 
f
r
e
e
"
 
}
,


 
 
{
 
o
p
:
 
"
B
r
a
n
c
h
 
m
i
s
p
r
e
d
i
c
t
"
,
 
n
s
:
 
5
,
 
i
c
o
n
:
 
<
Z
a
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
 
n
o
t
e
:
 
"
1
0
×
 
L
1
"
 
}
,


 
 
{
 
o
p
:
 
"
L
2
 
c
a
c
h
e
 
r
e
f
e
r
e
n
c
e
"
,
 
n
s
:
 
7
,
 
i
c
o
n
:
 
<
Z
a
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
 
n
o
t
e
:
 
"
~
1
4
×
 
L
1
"
 
}
,


 
 
{
 
o
p
:
 
"
M
u
t
e
x
 
l
o
c
k
 
/
 
u
n
l
o
c
k
"
,
 
n
s
:
 
2
5
,
 
i
c
o
n
:
 
<
S
e
r
v
e
r
 
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
 
n
o
t
e
:
 
"
"
 
}
,


 
 
{
 
o
p
:
 
"
M
a
i
n
 
m
e
m
o
r
y
 
r
e
f
e
r
e
n
c
e
"
,
 
n
s
:
 
1
0
0
,
 
i
c
o
n
:
 
<
S
e
r
v
e
r
 
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
 
n
o
t
e
:
 
"
2
0
0
×
 
L
1
"
 
}
,


 
 
{
 
o
p
:
 
"
C
o
m
p
r
e
s
s
 
1
K
B
 
w
i
t
h
 
S
n
a
p
p
y
"
,
 
n
s
:
 
2
_
0
0
0
,
 
i
c
o
n
:
 
<
S
e
r
v
e
r
 
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
 
n
o
t
e
:
 
"
~
2
μ
s
"
 
}
,


 
 
{
 
o
p
:
 
"
R
e
a
d
 
1
M
B
 
s
e
q
u
e
n
t
i
a
l
l
y
 
f
r
o
m
 
m
e
m
o
r
y
"
,
 
n
s
:
 
1
0
_
0
0
0
,
 
i
c
o
n
:
 
<
S
e
r
v
e
r
 
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
 
n
o
t
e
:
 
"
~
1
0
μ
s
"
 
}
,


 
 
{
 
o
p
:
 
"
S
S
D
 
r
a
n
d
o
m
 
r
e
a
d
"
,
 
n
s
:
 
1
0
0
_
0
0
0
,
 
i
c
o
n
:
 
<
H
a
r
d
D
r
i
v
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
"
 
/
>
,
 
n
o
t
e
:
 
"
~
0
.
1
m
s
 
-
 
1
0
0
0
×
 
R
A
M
"
 
}
,


 
 
{
 
o
p
:
 
"
R
e
a
d
 
1
M
B
 
s
e
q
u
e
n
t
i
a
l
l
y
 
f
r
o
m
 
S
S
D
"
,
 
n
s
:
 
1
_
0
0
0
_
0
0
0
,
 
i
c
o
n
:
 
<
H
a
r
d
D
r
i
v
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
"
 
/
>
,
 
n
o
t
e
:
 
"
~
1
m
s
"
 
}
,


 
 
{
 
o
p
:
 
"
R
o
u
n
d
 
t
r
i
p
 
w
i
t
h
i
n
 
s
a
m
e
 
d
a
t
a
c
e
n
t
e
r
"
,
 
n
s
:
 
5
0
0
_
0
0
0
,
 
i
c
o
n
:
 
<
N
e
t
w
o
r
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
"
 
/
>
,
 
n
o
t
e
:
 
"
~
0
.
5
m
s
"
 
}
,


 
 
{
 
o
p
:
 
"
D
i
s
k
 
s
e
e
k
 
(
s
p
i
n
n
i
n
g
 
r
u
s
t
)
"
,
 
n
s
:
 
1
0
_
0
0
0
_
0
0
0
,
 
i
c
o
n
:
 
<
H
a
r
d
D
r
i
v
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
"
 
/
>
,
 
n
o
t
e
:
 
"
~
1
0
m
s
 
-
 
a
v
o
i
d
"
 
}
,


 
 
{
 
o
p
:
 
"
R
e
a
d
 
1
M
B
 
s
e
q
u
e
n
t
i
a
l
l
y
 
f
r
o
m
 
d
i
s
k
"
,
 
n
s
:
 
2
0
_
0
0
0
_
0
0
0
,
 
i
c
o
n
:
 
<
H
a
r
d
D
r
i
v
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
"
 
/
>
,
 
n
o
t
e
:
 
"
~
2
0
m
s
"
 
}
,


 
 
{
 
o
p
:
 
"
P
a
c
k
e
t
 
r
o
u
n
d
 
t
r
i
p
 
C
A
 
→
 
E
u
r
o
p
e
"
,
 
n
s
:
 
1
5
0
_
0
0
0
_
0
0
0
,
 
i
c
o
n
:
 
<
G
l
o
b
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
"
 
/
>
,
 
n
o
t
e
:
 
"
~
1
5
0
m
s
 
-
 
s
p
e
e
d
 
o
f
 
l
i
g
h
t
 
i
n
 
f
i
b
e
r
"
 
}
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
 
f
o
r
m
a
t
L
a
t
e
n
c
y
(
n
s
:
 
n
u
m
b
e
r
)
:
 
s
t
r
i
n
g
 
{


 
 
i
f
 
(
n
s
 
<
 
1
_
0
0
0
)
 
r
e
t
u
r
n
 
`
$
{
n
s
}
 
n
s
`
;


 
 
i
f
 
(
n
s
 
<
 
1
_
0
0
0
_
0
0
0
)
 
r
e
t
u
r
n
 
`
$
{
(
n
s
 
/
 
1
0
0
0
)
.
t
o
F
i
x
e
d
(
1
)
}
 
μ
s
`
;


 
 
i
f
 
(
n
s
 
<
 
1
_
0
0
0
_
0
0
0
_
0
0
0
)
 
r
e
t
u
r
n
 
`
$
{
(
n
s
 
/
 
1
_
0
0
0
_
0
0
0
)
.
t
o
F
i
x
e
d
(
1
)
}
 
m
s
`
;


 
 
r
e
t
u
r
n
 
`
$
{
(
n
s
 
/
 
1
_
0
0
0
_
0
0
0
_
0
0
0
)
.
t
o
F
i
x
e
d
(
2
)
}
 
s
`
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
 
L
a
t
e
n
c
y
N
u
m
b
e
r
s
(
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
N
s
 
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
L
A
T
E
N
C
I
E
S
.
m
a
p
(
(
l
)
 
=
>
 
l
.
n
s
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
L
a
t
e
n
c
y
 
n
u
m
b
e
r
s
 
e
v
e
r
y
 
e
n
g
i
n
e
e
r
 
s
h
o
u
l
d
 
k
n
o
w
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
O
r
i
g
i
n
a
l
l
y
 
b
y
 
J
e
f
f
 
D
e
a
n
.
 
T
h
e
s
e
 
c
o
n
s
t
a
n
t
s
 
d
e
c
i
d
e
 
e
v
e
r
y
 
a
r
c
h
i
t
e
c
t
u
r
e
 
c
h
o
i
c
e
 
y
o
u
&
r
s
q
u
o
;
l
l
 
e
v
e
r


 
 
 
 
 
 
 
 
m
a
k
e
.
 
N
o
t
i
c
e
 
h
o
w
 
e
a
c
h
 
j
u
m
p
 
i
s
 
<
e
m
>
r
o
u
g
h
l
y
<
/
e
m
>
 
a
n
 
o
r
d
e
r
 
o
f
 
m
a
g
n
i
t
u
d
e
 
-
 
t
h
a
t
&
r
s
q
u
o
;
s
 
t
h
e


 
 
 
 
 
 
 
 
i
n
t
u
i
t
i
o
n
 
y
o
u
 
n
e
e
d
.


 
 
 
 
 
 
<
/
p
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


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
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
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
-
s
u
b
t
l
e
)
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
L
A
T
E
N
C
I
E
S
.
m
a
p
(
(
r
o
w
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
 
p
c
t
 
=
 
M
a
t
h
.
l
o
g
1
0
(
r
o
w
.
n
s
 
+
 
1
)
 
/
 
M
a
t
h
.
l
o
g
1
0
(
m
a
x
N
s
 
+
 
1
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
r
o
w
.
o
p
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
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
2
4
p
x
 
1
f
r
 
1
0
0
p
x
 
1
f
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
2
,
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
i
 
<
 
L
A
T
E
N
C
I
E
S
.
l
e
n
g
t
h
 
-
 
1
 
?
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
:
 
"
n
o
n
e
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
:
 
i
 
%
 
2
 
=
=
=
 
0
 
?
 
"
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
"
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
w
.
i
c
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
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>
{
r
o
w
.
o
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
s
p
a
n
 
s
t
y
l
e
=
{
{
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
2
r
e
m
"
,
 
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
:
 
7
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
t
e
x
t
A
l
i
g
n
:
 
"
r
i
g
h
t
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
o
r
m
a
t
L
a
t
e
n
c
y
(
r
o
w
.
n
s
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
 
h
e
i
g
h
t
:
 
6
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
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
3
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
}
}
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
 
`
$
{
p
c
t
 
*
 
1
0
0
}
%
`
,
 
h
e
i
g
h
t
:
 
"
1
0
0
%
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
:
 
S
D
 
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
/
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


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
}


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
s
h
o
w
"


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
T
o
p
:
 
1
6
,
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
3
,
 
1
f
r
)
"
,
 
g
a
p
:
 
1
0
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{
 
r
u
l
e
:
 
"
R
A
M
 
i
s
 
~
1
0
0
0
×
 
f
a
s
t
e
r
 
t
h
a
n
 
S
S
D
"
,
 
i
m
p
l
:
 
"
C
a
c
h
e
 
h
o
t
 
d
a
t
a
 
i
n
 
R
e
d
i
s
,
 
n
o
t
 
\
"
j
u
s
t
 
h
i
t
 
t
h
e
 
D
B
\
"
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
r
u
l
e
:
 
"
S
a
m
e
-
D
C
 
r
o
u
n
d
 
t
r
i
p
 
≈
 
S
S
D
 
r
e
a
d
"
,
 
i
m
p
l
:
 
"
A
 
n
e
t
w
o
r
k
 
c
a
l
l
 
w
i
t
h
i
n
 
a
 
D
C
 
c
o
s
t
s
 
a
b
o
u
t
 
t
h
e
 
s
a
m
e
 
a
s
 
a
 
d
i
s
k
 
r
e
a
d
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
r
u
l
e
:
 
"
C
r
o
s
s
-
c
o
n
t
i
n
e
n
t
 
≈
 
1
5
0
m
s
"
,
 
i
m
p
l
:
 
"
A
n
y
 
d
e
s
i
g
n
 
t
o
u
c
h
i
n
g
 
m
u
l
t
i
-
r
e
g
i
o
n
 
p
a
y
s
 
t
h
i
s
 
o
n
 
e
v
e
r
y
 
u
s
e
r
-
v
i
s
i
b
l
e
 
r
e
a
d
.
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
c
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
c
.
r
u
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
c
a
r
d
E
n
t
r
a
n
c
e
}


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
c
a
r
d
H
o
v
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
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
:
 
S
D
_
S
O
F
T
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
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
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
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
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
r
u
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
i
m
p
l
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
C
h
e
a
t
 
c
a
r
d
 
(
p
o
w
e
r
s
 
o
f
 
2
 
+
 
s
h
o
r
t
c
u
t
s
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
 
C
h
e
a
t
C
a
r
d
(
)
 
{


 
 
c
o
n
s
t
 
p
o
w
e
r
s
 
=
 
[


 
 
 
 
{
 
e
x
p
:
 
"
2
^
1
0
"
,
 
v
a
l
:
 
"
≈
 
1
0
³
"
,
 
n
a
m
e
:
 
"
K
i
l
o
"
,
 
b
y
t
e
s
:
 
"
1
 
K
B
"
 
}
,


 
 
 
 
{
 
e
x
p
:
 
"
2
^
2
0
"
,
 
v
a
l
:
 
"
≈
 
1
0
⁶
"
,
 
n
a
m
e
:
 
"
M
e
g
a
"
,
 
b
y
t
e
s
:
 
"
1
 
M
B
"
 
}
,


 
 
 
 
{
 
e
x
p
:
 
"
2
^
3
0
"
,
 
v
a
l
:
 
"
≈
 
1
0
⁹
"
,
 
n
a
m
e
:
 
"
G
i
g
a
"
,
 
b
y
t
e
s
:
 
"
1
 
G
B
"
 
}
,


 
 
 
 
{
 
e
x
p
:
 
"
2
^
3
2
"
,
 
v
a
l
:
 
"
≈
 
4
 
×
 
1
0
⁹
"
,
 
n
a
m
e
:
 
"
I
P
v
4
 
s
p
a
c
e
"
,
 
b
y
t
e
s
:
 
"
4
 
G
B
"
 
}
,


 
 
 
 
{
 
e
x
p
:
 
"
2
^
4
0
"
,
 
v
a
l
:
 
"
≈
 
1
0
¹
²
"
,
 
n
a
m
e
:
 
"
T
e
r
a
"
,
 
b
y
t
e
s
:
 
"
1
 
T
B
"
 
}
,


 
 
 
 
{
 
e
x
p
:
 
"
2
^
5
0
"
,
 
v
a
l
:
 
"
≈
 
1
0
¹
⁵
"
,
 
n
a
m
e
:
 
"
P
e
t
a
"
,
 
b
y
t
e
s
:
 
"
1
 
P
B
"
 
}
,


 
 
 
 
{
 
e
x
p
:
 
"
2
^
6
3
"
,
 
v
a
l
:
 
"
≈
 
9
 
×
 
1
0
¹
⁸
"
,
 
n
a
m
e
:
 
"
m
a
x
 
i
n
t
6
4
"
,
 
b
y
t
e
s
:
 
"
-
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
 
q
p
s
 
=
 
[


 
 
 
 
{
 
s
c
e
n
a
r
i
o
:
 
"
P
e
r
s
o
n
a
l
 
b
l
o
g
"
,
 
d
a
u
:
 
"
1
K
"
,
 
q
p
s
:
 
"
~
0
 
Q
P
S
"
,
 
f
i
t
:
 
"
S
i
n
g
l
e
 
s
e
r
v
e
r
,
 
S
Q
L
i
t
e
"
 
}
,


 
 
 
 
{
 
s
c
e
n
a
r
i
o
:
 
"
M
i
d
 
s
t
a
r
t
u
p
"
,
 
d
a
u
:
 
"
1
M
"
,
 
q
p
s
:
 
"
~
1
0
0
 
Q
P
S
"
,
 
f
i
t
:
 
"
O
n
e
 
b
e
e
f
y
 
D
B
,
 
a
p
p
 
t
i
e
r
 
o
f
 
3
–
5
"
 
}
,


 
 
 
 
{
 
s
c
e
n
a
r
i
o
:
 
"
B
i
g
 
c
o
n
s
u
m
e
r
 
a
p
p
"
,
 
d
a
u
:
 
"
1
0
0
M
"
,
 
q
p
s
:
 
"
~
1
0
K
 
Q
P
S
 
r
e
a
d
s
"
,
 
f
i
t
:
 
"
C
a
c
h
e
 
t
i
e
r
,
 
D
B
 
r
e
p
l
i
c
a
s
,
 
C
D
N
"
 
}
,


 
 
 
 
{
 
s
c
e
n
a
r
i
o
:
 
"
T
w
i
t
t
e
r
 
/
 
I
n
s
t
a
g
r
a
m
"
,
 
d
a
u
:
 
"
5
0
0
M
+
"
,
 
q
p
s
:
 
"
~
5
0
0
K
+
 
Q
P
S
"
,
 
f
i
t
:
 
"
S
h
a
r
d
e
d
 
D
B
s
,
 
a
s
y
n
c
 
f
a
n
-
o
u
t
,
 
m
u
l
t
i
-
r
e
g
i
o
n
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
T
h
e
 
c
h
e
a
t
 
c
a
r
d
 
y
o
u
 
p
r
i
n
t
 
a
n
d
 
t
a
p
e
 
t
o
 
y
o
u
r
 
m
o
n
i
t
o
r
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
T
w
o
 
t
a
b
l
e
s
.
 
M
e
m
o
r
i
z
e
 
b
o
t
h
.
 
O
n
e
 
c
o
n
v
e
r
t
s
 
p
o
w
e
r
s
 
o
f
 
2
 
t
o
 
d
e
c
i
m
a
l
 
s
i
z
e
s
 
y
o
u
 
c
a
n
 
r
e
a
s
o
n
 
a
b
o
u
t
.


 
 
 
 
 
 
 
 
T
h
e
 
o
t
h
e
r
 
t
e
l
l
s
 
y
o
u
 
w
h
a
t
 
a
r
c
h
i
t
e
c
t
u
r
e
 
c
l
a
s
s
 
y
o
u
r
 
s
y
s
t
e
m
 
f
a
l
l
s
 
i
n
t
o
 
b
a
s
e
d
 
o
n
 
D
A
U
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
{
/
*
 
P
o
w
e
r
s
 
o
f
 
2
 
*
/
}


 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,


 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
8
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
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
:
 
S
D
_
S
O
F
T
,
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
c
o
l
o
r
:
 
S
D
,
 
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
:
 
8
0
0
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
P
O
W
E
R
S
 
O
F
 
2
 
·
 
C
O
N
V
E
R
T
 
B
I
T
S
/
B
Y
T
E
S
 
T
O
 
D
E
C
I
M
A
L
 
I
N
 
Y
O
U
R
 
H
E
A
D


 
 
 
 
 
 
 
 
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
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
1
f
r
 
1
f
r
 
2
f
r
 
1
f
r
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
[
"
P
o
w
e
r
"
,
 
"
D
e
c
i
m
a
l
"
,
 
"
C
o
m
m
o
n
 
n
a
m
e
"
,
 
"
B
y
t
e
s
"
]
.
m
a
p
(
(
h
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
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
8
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
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
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
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
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
-
s
u
b
t
l
e
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
.
t
o
U
p
p
e
r
C
a
s
e
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
{
p
o
w
e
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
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
F
r
a
g
m
e
n
t
 
k
e
y
=
{
p
.
e
x
p
}
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
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
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
:
 
7
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
i
 
<
 
p
o
w
e
r
s
.
l
e
n
g
t
h
 
-
 
1
 
?
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
:
 
"
n
o
n
e
"
 
}
}
>
{
p
.
e
x
p
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
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
i
 
<
 
p
o
w
e
r
s
.
l
e
n
g
t
h
 
-
 
1
 
?
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
:
 
"
n
o
n
e
"
 
}
}
>
{
p
.
v
a
l
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
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
i
 
<
 
p
o
w
e
r
s
.
l
e
n
g
t
h
 
-
 
1
 
?
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
:
 
"
n
o
n
e
"
 
}
}
>
{
p
.
n
a
m
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
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
i
 
<
 
p
o
w
e
r
s
.
l
e
n
g
t
h
 
-
 
1
 
?
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
:
 
"
n
o
n
e
"
 
}
}
>
{
p
.
b
y
t
e
s
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
r
a
g
m
e
n
t
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




 
 
 
 
 
 
{
/
*
 
S
c
a
l
e
 
t
i
e
r
 
*
/
}


 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
.
5
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,


 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
6
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
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
:
 
S
D
_
S
O
F
T
,
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
c
o
l
o
r
:
 
S
D
,
 
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
:
 
8
0
0
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
S
C
A
L
E
 
T
I
E
R
S
 
·
 
M
A
T
C
H
 
D
A
U
 
→
 
A
R
C
H
I
T
E
C
T
U
R
E
 
C
L
A
S
S


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
{
q
p
s
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
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
q
.
s
c
e
n
a
r
i
o
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
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
1
.
5
f
r
 
1
f
r
 
1
f
r
 
2
f
r
"
,
 
g
a
p
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
i
 
<
 
q
p
s
.
l
e
n
g
t
h
 
-
 
1
 
?
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
:
 
"
n
o
n
e
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
:
 
i
 
%
 
2
 
=
=
=
 
0
 
?
 
"
v
a
r
(
-
-
e
n
g
-
b
g
)
"
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
g
-
s
u
b
t
l
e
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
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
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
U
s
e
r
s
 
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
8
r
e
m
"
,
 
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
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>
{
q
.
s
c
e
n
a
r
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
 
}
}
>
{
q
.
d
a
u
}
 
D
A
U
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
 
s
t
y
l
e
=
{
{
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
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
:
 
7
0
0
,
 
c
o
l
o
r
:
 
S
D
 
}
}
>
{
q
.
q
p
s
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
2
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>
{
q
.
f
i
t
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


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
`
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
:
 
S
D
_
S
O
F
T
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
8
r
e
m
"
,
 
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
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
T
H
E
 
M
E
N
T
A
L
 
S
H
O
R
T
C
U
T


 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
b
>
1
 
d
a
y
 
=
 
8
6
,
4
0
0
 
s
 
≈
 
1
0
⁵
 
s
.
<
/
b
>
 
S
o
:
 
D
A
U
 
÷
 
1
0
0
,
0
0
0
 
≈
 
a
v
e
r
a
g
e
 
Q
P
S
 
i
f
 
e
a
c
h
 
u
s
e
r
 
d
o
e
s
 
o
n
e


 
 
 
 
 
 
 
 
 
 
a
c
t
i
o
n
 
p
e
r
 
d
a
y
.
 
F
r
o
m
 
t
h
e
r
e
,
 
m
u
l
t
i
p
l
y
 
b
y
 
a
c
t
i
o
n
s
/
d
a
y
,
 
t
h
e
n
 
b
y
 
a
 
p
e
a
k
 
f
a
c
t
o
r
 
o
f
 
3
×
.


 
 
 
 
 
 
 
 
 
 
T
h
a
t
&
r
s
q
u
o
;
s
 
t
h
e
 
w
h
o
l
e
 
c
a
l
c
u
l
a
t
i
o
n
.
 
S
a
y
 
i
t
 
o
u
t
 
l
o
u
d
 
i
n
 
y
o
u
r
 
n
e
x
t
 
m
o
c
k
 
i
n
t
e
r
v
i
e
w
.


 
 
 
 
 
 
 
 
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
M
A
I
N
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
 
S
D
_
L
1
_
B
a
c
k
O
f
E
n
v
e
l
o
p
e
A
c
t
i
v
i
t
y
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
 
}
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
 
E
n
g
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
c
a
l
c
"
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
i
m
a
t
o
r
"
,
 
i
c
o
n
:
 
<
C
a
l
c
u
l
a
t
o
r
 
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
C
a
l
c
u
l
a
t
o
r
1
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
l
a
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
L
a
t
e
n
c
y
 
N
u
m
b
e
r
s
"
,
 
i
c
o
n
:
 
<
T
i
m
e
r
 
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
a
t
e
n
c
y
N
u
m
b
e
r
s
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
c
h
e
a
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
C
h
e
a
t
 
C
a
r
d
"
,
 
i
c
o
n
:
 
<
G
a
u
g
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
C
h
e
a
t
C
a
r
d
 
/
>
 
}
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
 
E
n
g
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
R
o
u
g
h
l
y
 
h
o
w
 
m
a
n
y
 
s
e
c
o
n
d
s
 
a
r
e
 
i
n
 
a
 
d
a
y
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
3
,
6
0
0
"
,
 
"
8
6
,
4
0
0
"
,
 
"
6
0
4
,
8
0
0
"
,
 
"
1
,
0
0
0
,
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
6
0
 
×
 
6
0
 
×
 
2
4
 
=
 
8
6
,
4
0
0
 
≈
 
1
0
⁵
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
 
s
i
n
g
l
e
 
m
o
s
t
-
u
s
e
d
 
s
h
o
r
t
c
u
t
 
i
n
 
c
a
p
a
c
i
t
y
 
e
s
t
i
m
a
t
i
o
n
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
 
s
e
r
v
i
c
e
 
h
a
s
 
1
0
0
M
 
D
A
U
.
 
E
a
c
h
 
u
s
e
r
 
d
o
e
s
 
1
 
w
r
i
t
e
 
p
e
r
 
d
a
y
.
 
U
s
i
n
g
 
t
h
e
 
1
0
⁵
 
s
h
o
r
t
c
u
t
 
(
1
 
d
a
y
 
≈
 
1
0
⁵
 
s
e
c
o
n
d
s
)
,
 
w
h
a
t
&
r
s
q
u
o
;
s
 
t
h
e
 
a
v
e
r
a
g
e
 
w
r
i
t
e
 
Q
P
S
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
~
1
0
 
Q
P
S
"
,
 
"
~
1
0
0
 
Q
P
S
"
,
 
"
~
1
,
0
0
0
 
Q
P
S
 
(
1
0
0
M
 
÷
 
1
0
⁵
)
"
,
 
"
~
1
0
0
,
0
0
0
 
Q
P
S
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
 
2
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
1
0
0
M
 
÷
 
1
0
⁵
 
=
 
1
,
0
0
0
 
Q
P
S
.
 
T
h
e
 
e
x
a
c
t
 
n
u
m
b
e
r
 
i
s
 
1
,
1
5
7
 
(
÷
 
8
6
,
4
0
0
)
,
 
b
u
t
 
y
o
u
 
a
l
w
a
y
s
 
u
s
e
 
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
 
o
n
 
a
 
w
h
i
t
e
b
o
a
r
d
.
 
T
h
e
n
 
a
d
d
 
a
 
~
3
×
 
p
e
a
k
 
m
u
l
t
i
p
l
i
e
r
 
f
o
r
 
s
a
f
e
t
y
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
 
h
o
w
 
m
u
c
h
 
s
l
o
w
e
r
 
i
s
 
a
n
 
S
S
D
 
r
a
n
d
o
m
 
r
e
a
d
 
v
s
 
a
 
m
a
i
n
 
m
e
m
o
r
y
 
r
e
f
e
r
e
n
c
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
2
×
 
s
l
o
w
e
r
"
,
 
"
1
0
×
 
s
l
o
w
e
r
"
,
 
"
1
0
0
×
 
s
l
o
w
e
r
"
,
 
"
A
b
o
u
t
 
1
,
0
0
0
×
 
s
l
o
w
e
r
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
 
3
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
M
a
i
n
 
m
e
m
o
r
y
 
≈
 
1
0
0
n
s
,
 
S
S
D
 
r
a
n
d
o
m
 
r
e
a
d
 
≈
 
1
0
0
,
0
0
0
n
s
 
=
 
1
0
0
μ
s
.
 
T
h
a
t
&
r
s
q
u
o
;
s
 
1
0
0
0
×
.
 
I
t
&
r
s
q
u
o
;
s
 
w
h
y
 
i
n
-
m
e
m
o
r
y
 
c
a
c
h
e
s
 
(
R
e
d
i
s
)
 
e
x
i
s
t
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
Y
o
u
r
 
r
e
a
d
:
w
r
i
t
e
 
r
a
t
i
o
 
i
s
 
1
0
0
:
1
 
a
n
d
 
w
r
i
t
e
s
 
a
r
e
 
5
K
 
Q
P
S
.
 
A
v
e
r
a
g
e
 
r
e
a
d
s
 
p
e
r
 
s
e
c
o
n
d
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
~
5
0
 
Q
P
S
"
,
 
"
~
5
0
0
 
Q
P
S
"
,
 
"
~
5
0
0
K
 
Q
P
S
"
,
 
"
~
5
M
 
Q
P
S
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
 
2
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
5
,
0
0
0
 
×
 
1
0
0
 
=
 
5
0
0
,
0
0
0
 
Q
P
S
.
 
T
h
i
s
 
i
s
 
w
h
y
 
T
w
i
t
t
e
r
 
c
a
c
h
e
s
 
t
i
m
e
l
i
n
e
s
 
-
 
y
o
u
 
n
e
v
e
r
 
h
i
t
 
t
h
e
 
D
B
 
f
o
r
 
r
e
a
d
s
 
a
t
 
t
h
a
t
 
s
c
a
l
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
A
 
u
s
e
r
 
i
n
 
C
a
l
i
f
o
r
n
i
a
 
m
a
k
e
s
 
a
n
 
A
P
I
 
c
a
l
l
.
 
T
h
e
 
s
e
r
v
e
r
 
i
s
 
i
n
 
F
r
a
n
k
f
u
r
t
.
 
M
i
n
i
m
u
m
 
R
T
T
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
~
1
 
m
s
"
,
 
"
~
1
0
 
m
s
"
,
 
"
~
1
5
0
 
m
s
 
(
s
p
e
e
d
 
o
f
 
l
i
g
h
t
 
i
n
 
f
i
b
e
r
)
"
,
 
"
~
1
 
s
e
c
o
n
d
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
 
2
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
C
r
o
s
s
-
c
o
n
t
i
n
e
n
t
a
l
 
R
T
T
 
i
s
 
b
o
u
n
d
e
d
 
b
y
 
p
h
y
s
i
c
s
 
-
 
a
b
o
u
t
 
1
5
0
m
s
.
 
T
h
i
s
 
i
s
 
w
h
y
 
C
D
N
s
 
a
n
d
 
r
e
g
i
o
n
a
l
 
r
e
p
l
i
c
a
s
 
e
x
i
s
t
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
E
n
g
i
n
e
e
r
i
n
g
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
a
c
k
-
o
f
-
E
n
v
e
l
o
p
e
 
E
s
t
i
m
a
t
i
o
n
"


 
 
 
 
 
 
l
e
v
e
l
=
{
1
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
S
t
e
p
 
2
 
o
f
 
e
v
e
r
y
 
H
L
D
 
r
o
u
n
d
 
-
 
t
h
e
 
n
u
m
b
e
r
s
 
t
h
a
t
 
j
u
s
t
i
f
y
 
e
v
e
r
y
t
h
i
n
g
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


