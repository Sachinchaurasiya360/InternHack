
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
R
e
f
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
n
t
e
r
f
a
c
e
 
U
s
e
S
p
e
e
c
h
R
e
c
o
g
n
i
t
i
o
n
O
p
t
i
o
n
s
 
{


 
 
o
n
I
n
t
e
r
i
m
:
 
(
t
e
x
t
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
 
v
o
i
d
;


 
 
o
n
F
i
n
a
l
:
 
(
t
e
x
t
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
 
v
o
i
d
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
 
S
p
e
e
c
h
R
e
c
o
g
n
i
t
i
o
n
R
e
s
u
l
t
 
{


 
 
s
u
p
p
o
r
t
e
d
:
 
b
o
o
l
e
a
n
;


 
 
i
s
L
i
s
t
e
n
i
n
g
:
 
b
o
o
l
e
a
n
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


 
 
s
t
a
r
t
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


 
 
s
t
o
p
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
 
u
s
e
S
p
e
e
c
h
R
e
c
o
g
n
i
t
i
o
n
(
{


 
 
o
n
I
n
t
e
r
i
m
,


 
 
o
n
F
i
n
a
l
,


}
:
 
U
s
e
S
p
e
e
c
h
R
e
c
o
g
n
i
t
i
o
n
O
p
t
i
o
n
s
)
:
 
S
p
e
e
c
h
R
e
c
o
g
n
i
t
i
o
n
R
e
s
u
l
t
 
{


 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
@
t
y
p
e
s
c
r
i
p
t
-
e
s
l
i
n
t
/
n
o
-
e
x
p
l
i
c
i
t
-
a
n
y


 
 
c
o
n
s
t
 
r
e
c
o
g
n
i
t
i
o
n
R
e
f
 
=
 
u
s
e
R
e
f
<
a
n
y
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
 
s
i
l
e
n
c
e
T
i
m
e
r
R
e
f
 
=
 
u
s
e
R
e
f
<
R
e
t
u
r
n
T
y
p
e
<
t
y
p
e
o
f
 
s
e
t
T
i
m
e
o
u
t
>
 
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
i
s
L
i
s
t
e
n
i
n
g
,
 
s
e
t
I
s
L
i
s
t
e
n
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




 
 
c
o
n
s
t
 
o
n
I
n
t
e
r
i
m
R
e
f
 
=
 
u
s
e
R
e
f
(
o
n
I
n
t
e
r
i
m
)
;


 
 
c
o
n
s
t
 
o
n
F
i
n
a
l
R
e
f
 
=
 
u
s
e
R
e
f
(
o
n
F
i
n
a
l
)
;


 
 
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


 
 
 
 
o
n
I
n
t
e
r
i
m
R
e
f
.
c
u
r
r
e
n
t
 
=
 
o
n
I
n
t
e
r
i
m
;


 
 
 
 
o
n
F
i
n
a
l
R
e
f
.
c
u
r
r
e
n
t
 
=
 
o
n
F
i
n
a
l
;


 
 
}
,
 
[
o
n
I
n
t
e
r
i
m
,
 
o
n
F
i
n
a
l
]
)
;




 
 
c
o
n
s
t
 
s
u
p
p
o
r
t
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


 
 
 
 
i
f
 
(
t
y
p
e
o
f
 
w
i
n
d
o
w
 
=
=
=
 
"
u
n
d
e
f
i
n
e
d
"
)
 
r
e
t
u
r
n
 
f
a
l
s
e
;


 
 
 
 
r
e
t
u
r
n
 
"
S
p
e
e
c
h
R
e
c
o
g
n
i
t
i
o
n
"
 
i
n
 
w
i
n
d
o
w
 
|
|
 
"
w
e
b
k
i
t
S
p
e
e
c
h
R
e
c
o
g
n
i
t
i
o
n
"
 
i
n
 
w
i
n
d
o
w
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
 
s
t
a
r
t
 
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
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
s
u
p
p
o
r
t
e
d
)
 
r
e
t
u
r
n
;




 
 
 
 
r
e
c
o
g
n
i
t
i
o
n
R
e
f
.
c
u
r
r
e
n
t
?
.
a
b
o
r
t
(
)
;




 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
@
t
y
p
e
s
c
r
i
p
t
-
e
s
l
i
n
t
/
n
o
-
e
x
p
l
i
c
i
t
-
a
n
y


 
 
 
 
c
o
n
s
t
 
w
 
=
 
w
i
n
d
o
w
 
a
s
 
a
n
y
;


 
 
 
 
c
o
n
s
t
 
S
p
e
e
c
h
R
e
c
o
g
n
i
t
i
o
n
C
t
o
r
 
=
 
w
.
S
p
e
e
c
h
R
e
c
o
g
n
i
t
i
o
n
 
|
|
 
w
.
w
e
b
k
i
t
S
p
e
e
c
h
R
e
c
o
g
n
i
t
i
o
n
;




 
 
 
 
i
f
 
(
!
S
p
e
e
c
h
R
e
c
o
g
n
i
t
i
o
n
C
t
o
r
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
 
r
e
c
o
g
n
i
t
i
o
n
 
=
 
n
e
w
 
S
p
e
e
c
h
R
e
c
o
g
n
i
t
i
o
n
C
t
o
r
(
)
;


 
 
 
 
r
e
c
o
g
n
i
t
i
o
n
.
c
o
n
t
i
n
u
o
u
s
 
=
 
t
r
u
e
;


 
 
 
 
r
e
c
o
g
n
i
t
i
o
n
.
i
n
t
e
r
i
m
R
e
s
u
l
t
s
 
=
 
t
r
u
e
;


 
 
 
 
r
e
c
o
g
n
i
t
i
o
n
.
l
a
n
g
 
=
 
n
a
v
i
g
a
t
o
r
.
l
a
n
g
u
a
g
e
 
|
|
 
"
e
n
-
U
S
"
;




 
 
 
 
c
o
n
s
t
 
r
e
s
e
t
S
i
l
e
n
c
e
T
i
m
e
r
 
=
 
(
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
s
i
l
e
n
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
 
c
l
e
a
r
T
i
m
e
o
u
t
(
s
i
l
e
n
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
 
 
s
i
l
e
n
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
 
=
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
r
e
c
o
g
n
i
t
i
o
n
R
e
f
.
c
u
r
r
e
n
t
?
.
s
t
o
p
(
)
;


 
 
 
 
 
 
}
,
 
2
0
0
0
)
;


 
 
 
 
}
;


 
 
 
 


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
@
t
y
p
e
s
c
r
i
p
t
-
e
s
l
i
n
t
/
n
o
-
e
x
p
l
i
c
i
t
-
a
n
y


 
 
 
 
r
e
c
o
g
n
i
t
i
o
n
.
o
n
r
e
s
u
l
t
 
=
 
(
e
v
e
n
t
:
 
a
n
y
)
 
=
>
 
{


 
 
 
 
 
 
r
e
s
e
t
S
i
l
e
n
c
e
T
i
m
e
r
(
)
;


 
 
 
 
 
 
l
e
t
 
i
n
t
e
r
i
m
 
=
 
"
"
;


 
 
 
 
 
 
l
e
t
 
f
i
n
a
l
 
=
 
"
"
;


 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
e
v
e
n
t
.
r
e
s
u
l
t
I
n
d
e
x
;
 
i
 
<
 
e
v
e
n
t
.
r
e
s
u
l
t
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
+
+
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
r
a
n
s
c
r
i
p
t
 
=
 
e
v
e
n
t
.
r
e
s
u
l
t
s
[
i
]
[
0
]
.
t
r
a
n
s
c
r
i
p
t
;


 
 
 
 
 
 
 
 
i
f
 
(
e
v
e
n
t
.
r
e
s
u
l
t
s
[
i
]
.
i
s
F
i
n
a
l
)
 
{


 
 
 
 
 
 
 
 
 
 
f
i
n
a
l
 
+
=
 
t
r
a
n
s
c
r
i
p
t
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
i
n
t
e
r
i
m
 
+
=
 
t
r
a
n
s
c
r
i
p
t
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
 
 
i
f
 
(
i
n
t
e
r
i
m
)
 
o
n
I
n
t
e
r
i
m
R
e
f
.
c
u
r
r
e
n
t
(
i
n
t
e
r
i
m
)
;


 
 
 
 
 
 
i
f
 
(
f
i
n
a
l
)
 
o
n
F
i
n
a
l
R
e
f
.
c
u
r
r
e
n
t
(
f
i
n
a
l
)
;


 
 
 
 
}
;




 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
@
t
y
p
e
s
c
r
i
p
t
-
e
s
l
i
n
t
/
n
o
-
e
x
p
l
i
c
i
t
-
a
n
y


 
 
 
 
r
e
c
o
g
n
i
t
i
o
n
.
o
n
e
r
r
o
r
 
=
 
(
e
v
e
n
t
:
 
a
n
y
)
 
=
>
 
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
e
v
e
n
t
.
e
r
r
o
r
)
;


 
 
 
 
 
 
s
e
t
I
s
L
i
s
t
e
n
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
;




 
 
 
 
r
e
c
o
g
n
i
t
i
o
n
.
o
n
e
n
d
 
=
 
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
I
s
L
i
s
t
e
n
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
;




 
 
 
 
r
e
c
o
g
n
i
t
i
o
n
R
e
f
.
c
u
r
r
e
n
t
 
=
 
r
e
c
o
g
n
i
t
i
o
n
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


 
 
 
 
r
e
c
o
g
n
i
t
i
o
n
.
s
t
a
r
t
(
)
;


 
 
 
 
s
e
t
I
s
L
i
s
t
e
n
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


 
 
}
,
 
[
s
u
p
p
o
r
t
e
d
]
)
;




 
 
c
o
n
s
t
 
s
t
o
p
 
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
)
 
=
>
 
{


 
 
 
 
i
f
 
(
s
i
l
e
n
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
 
c
l
e
a
r
T
i
m
e
o
u
t
(
s
i
l
e
n
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
r
e
c
o
g
n
i
t
i
o
n
R
e
f
.
c
u
r
r
e
n
t
?
.
s
t
o
p
(
)
;


 
 
 
 
s
e
t
I
s
L
i
s
t
e
n
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
,
 
[
]
)
;




 
 
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


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
s
i
l
e
n
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
 
c
l
e
a
r
T
i
m
e
o
u
t
(
s
i
l
e
n
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
 
 
r
e
c
o
g
n
i
t
i
o
n
R
e
f
.
c
u
r
r
e
n
t
?
.
a
b
o
r
t
(
)
;


 
 
 
 
}
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
 
{
 
s
u
p
p
o
r
t
e
d
,
 
i
s
L
i
s
t
e
n
i
n
g
,
 
e
r
r
o
r
,
 
s
t
a
r
t
,
 
s
t
o
p
 
}
;


}


